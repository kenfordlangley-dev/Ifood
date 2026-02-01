class OrderManager {
    constructor() {
        this.orders = this.loadOrders();
        // Novo padrão: verificar
        this.currentFilter = 'pending';
        this.orderToDelete = null;
    }

    loadOrders() {
        const stored = localStorage.getItem('ifood-orders');
        return stored ? JSON.parse(stored) : [];
    }

    saveOrders() {
        localStorage.setItem('ifood-orders', JSON.stringify(this.orders));
    }

    addOrder(orderNumber) {
        const order = {
            id: Date.now().toString(),
            number: orderNumber.trim(),
            status: 'pending', // Novo status inicial: Verificar
            createdAt: new Date().toISOString()
        };
        this.orders.unshift(order);
        this.saveOrders();
        return order;
    }

    updateOrderStatus(orderId, status) {
        const order = this.orders.find(o => o.id === orderId);
        if (order) {
            order.status = status;
            // Se marcar como entregue, adicionar timestamp de conclusão
            if (status === 'delivered') {
                order.deliveredAt = new Date().toISOString();
            }
            this.saveOrders();
        }
    }

    deleteOrder(orderId) {
        this.orders = this.orders.filter(o => o.id !== orderId);
        this.saveOrders();
    }

    getFilteredOrders() {
        // Filtro específico para cada status
        if (this.currentFilter === 'history') {
            return this.orders.filter(o => o.status === 'delivered');
        }

        // Retorna pedidos com o status correspondente à aba (pending, preparing, waiting)
        return this.orders.filter(o => o.status === this.currentFilter);
    }

    getStats() {
        return {
            pending: this.orders.filter(o => o.status === 'pending').length,
            preparing: this.orders.filter(o => o.status === 'preparing').length,
            waiting: this.orders.filter(o => o.status === 'waiting').length,
            delivered: this.orders.filter(o => o.status === 'delivered').length
        };
    }
}

// ===================================
// UI CONTROLLER
// ===================================
class UIController {
    constructor(orderManager) {
        this.orderManager = orderManager;
        this.elements = {
            orderInput: document.getElementById('order-input'),
            addOrderBtn: document.getElementById('add-order-btn'),
            ordersContainer: document.getElementById('orders-container'),
            emptyState: document.getElementById('empty-state'),
            deleteModal: document.getElementById('delete-modal'),
            confirmDeleteBtn: document.getElementById('confirm-delete-btn'),
            cancelDeleteBtn: document.getElementById('cancel-delete-btn'),

            // Novos elementos de navegação
            navItems: document.querySelectorAll('.nav-item'),
            historyBtn: document.getElementById('history-btn'),
            historyBadge: document.getElementById('count-history-badge'),

            // Stats
            statPreparing: document.getElementById('stat-preparing'),
            statWaiting: document.getElementById('stat-waiting'),
            statDelivered: document.getElementById('stat-delivered'),

            // Badges da nav
            countPending: document.getElementById('count-pending'),
            countPreparing: document.getElementById('count-preparing'),
            countWaiting: document.getElementById('count-waiting')
        };
        this.initEventListeners();
        this.render();
    }

    initEventListeners() {
        // Add order
        this.elements.addOrderBtn.addEventListener('click', () => this.handleAddOrder());
        this.elements.orderInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleAddOrder();
        });

        // Bottom Navigation
        this.elements.navItems.forEach(item => {
            item.addEventListener('click', () => {
                this.elements.historyBtn.classList.remove('active');
                this.handleFilterChange(item.dataset.filter);
            });
        });

        // History Button (Top)
        this.elements.historyBtn.addEventListener('click', () => {
            // Desativar bottom nav
            this.elements.navItems.forEach(item => item.classList.remove('active'));
            this.elements.historyBtn.classList.add('active');

            this.orderManager.currentFilter = 'history';
            this.renderOrders();
        });

        // Delete modal
        this.elements.confirmDeleteBtn.addEventListener('click', () => this.handleConfirmDelete());
        this.elements.cancelDeleteBtn.addEventListener('click', () => this.hideDeleteModal());
        this.elements.deleteModal.addEventListener('click', (e) => {
            if (e.target === this.elements.deleteModal) this.hideDeleteModal();
        });
    }

    handleAddOrder() {
        const orderNumber = this.elements.orderInput.value.trim();

        if (!orderNumber) {
            this.showNotification('Por favor, insira um número de pedido', 'error');
            return;
        }

        this.orderManager.addOrder(orderNumber);
        this.elements.orderInput.value = '';

        // Mudar para a aba verificar se não estiver nela
        if (this.orderManager.currentFilter !== 'pending') {
            this.handleFilterChange('pending');
        } else {
            this.render();
        }

        this.showNotification('Pedido recebido! Verifique a aba 👁️', 'success');

        // Vibration feedback (if supported)
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    }

    handleFilterChange(filter) {
        this.orderManager.currentFilter = filter;
        this.elements.navItems.forEach(item => {
            item.classList.toggle('active', item.dataset.filter === filter);
        });
        this.renderOrders();
    }

    handleStatusChange(orderId, status) {
        this.orderManager.updateOrderStatus(orderId, status);

        // Se mudou de status, o pedido vai sair da lista atual (pipeline)
        // Não vamos mudar de aba automaticamente, apenas notificar

        if (status === 'delivered') {
            this.showNotification('✅ Pedido movido para Histórico!', 'success');
        } else if (status === 'preparing') {
            this.showNotification('👨‍🍳 Pedido enviado para Cozinha!', 'success');
        } else if (status === 'waiting') {
            this.showNotification('🟡 Pedido aguardando retirada!', 'success');
        }

        this.render();

        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    }

    handleDeleteRequest(orderId) {
        this.orderManager.orderToDelete = orderId;
        this.showDeleteModal();
    }

    handleConfirmDelete() {
        if (this.orderManager.orderToDelete) {
            this.orderManager.deleteOrder(this.orderManager.orderToDelete);
            this.orderManager.orderToDelete = null;
            this.hideDeleteModal();
            this.render();
            this.showNotification('Pedido excluído', 'success');

            if (navigator.vibrate) {
                navigator.vibrate([50, 100, 50]);
            }
        }
    }

    showDeleteModal() {
        this.elements.deleteModal.classList.add('active');
    }

    hideDeleteModal() {
        this.elements.deleteModal.classList.remove('active');
        this.orderManager.orderToDelete = null;
    }

    render() {
        this.renderOrders();
        this.renderStats();
        this.renderCounts();
    }

    renderOrders() {
        const orders = this.orderManager.getFilteredOrders();

        if (orders.length === 0) {
            this.elements.ordersContainer.innerHTML = '';
            this.elements.emptyState.classList.add('visible');
            return;
        }

        this.elements.emptyState.classList.remove('visible');

        this.elements.ordersContainer.innerHTML = orders.map(order =>
            this.createOrderCard(order)
        ).join('');

        // Add event listeners to newly created elements
        this.attachOrderEventListeners();
    }

    createOrderCard(order) {
        const createdDate = new Date(order.createdAt);
        const timeAgo = this.getTimeAgo(createdDate);

        const statusLabels = {
            pending: 'Pendente',
            preparing: 'Em Preparo',
            waiting: 'Aguardando',
            delivered: 'Entregue'
        };

        return `
            <div class="order-card ${order.status}" data-order-id="${order.id}">
                <div class="order-header">
                    <div class="order-number-container">
                        <div class="order-label">Pedido</div>
                        <div class="order-number">#${order.number}</div>
                    </div>
                    <button class="delete-btn" data-delete="${order.id}" title="Excluir pedido">
                        🗑️
                    </button>
                </div>
                
                <div class="order-time">
                    ⏱️ ${timeAgo}
                </div>
                
                <div class="status-controls">
                    <button 
                        class="status-btn status-btn-preparing ${order.status === 'preparing' ? 'active' : ''}" 
                        data-status="preparing" 
                        data-order="${order.id}"
                        title="Marcar como Em Preparo"
                    >
                        🔴 Preparo
                    </button>
                    <button 
                        class="status-btn status-btn-waiting ${order.status === 'waiting' ? 'active' : ''}" 
                        data-status="waiting" 
                        data-order="${order.id}"
                        title="Marcar como Aguardando Motoboy"
                    >
                        🟡 Aguardando
                    </button>
                    <button 
                        class="status-btn status-btn-delivered ${order.status === 'delivered' ? 'active' : ''}" 
                        data-status="delivered" 
                        data-order="${order.id}"
                        title="Marcar como Entregue"
                    >
                        🟢 Entregue
                    </button>
                </div>
            </div>
        `;
    }

    attachOrderEventListeners() {
        // Status buttons
        document.querySelectorAll('.status-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const orderId = e.currentTarget.dataset.order;
                const status = e.currentTarget.dataset.status;
                this.handleStatusChange(orderId, status);
            });
        });

        // Delete buttons
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const orderId = e.currentTarget.dataset.delete;
                this.handleDeleteRequest(orderId);
            });
        });
    }

    renderStats() {
        const stats = this.orderManager.getStats();
        this.elements.statPreparing.textContent = stats.preparing;
        this.elements.statWaiting.textContent = stats.waiting;
        this.elements.statDelivered.textContent = stats.delivered;
    }

    renderCounts() {
        const stats = this.orderManager.getStats();

        this.elements.countPending.textContent = stats.pending;
        this.elements.countPreparing.textContent = stats.preparing;
        this.elements.countWaiting.textContent = stats.waiting;
        this.elements.historyBadge.textContent = stats.delivered;
    }

    getTimeAgo(date) {
        const seconds = Math.floor((new Date() - date) / 1000);

        const intervals = {
            ano: 31536000,
            mês: 2592000,
            semana: 604800,
            dia: 86400,
            hora: 3600,
            minuto: 60
        };

        for (const [name, value] of Object.entries(intervals)) {
            const interval = Math.floor(seconds / value);
            if (interval >= 1) {
                return `há ${interval} ${name}${interval > 1 && name !== 'mês' ? 's' : name === 'mês' && interval > 1 ? 'es' : ''}`;
            }
        }

        return 'agora mesmo';
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            z-index: 1001;
            animation: slideInRight 0.3s ease, slideOutRight 0.3s ease 2.7s;
            font-weight: 600;
            max-width: 300px;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// ===================================
// PWA INSTALLATION
// ===================================
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallPrompt();
});

function showInstallPrompt() {
    const promptDiv = document.createElement('div');
    promptDiv.className = 'install-prompt';
    promptDiv.innerHTML = `
        <p><strong>📲 Instalar App</strong></p>
        <p>Adicione este app à sua tela inicial para acesso rápido!</p>
        <button id="install-btn">Instalar Agora</button>
        <button id="dismiss-install" style="background: transparent; color: white; margin-left: 10px;">Agora não</button>
    `;

    document.body.appendChild(promptDiv);

    document.getElementById('install-btn').addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`User response to install prompt: ${outcome}`);
            deferredPrompt = null;
            promptDiv.remove();
        }
    });

    document.getElementById('dismiss-install').addEventListener('click', () => {
        promptDiv.remove();
    });
}

// ===================================
// SERVICE WORKER REGISTRATION
// ===================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then(registration => {
                console.log('Service Worker registered successfully:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

// ===================================
// ANIMATION UTILITIES
// ===================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// APP INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const orderManager = new OrderManager();
    const uiController = new UIController(orderManager);

    console.log('🍔 iFood Order Manager initialized!');

    // Update time every minute
    setInterval(() => {
        uiController.renderOrders();
    }, 60000);
});

// ===================================
// PREVENT ZOOM ON MOBILE
// ===================================
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

// ===================================
// THEME COLOR UPDATE
// ===================================
const metaThemeColor = document.querySelector('meta[name="theme-color"]');
if (metaThemeColor) {
    // Change theme color based on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            metaThemeColor.setAttribute('content', '#16213e');
        } else {
            metaThemeColor.setAttribute('content', '#1a1a2e');
        }
    });
}
