# 🍔 Gerenciador de Pedidos iFood - PWA

Um aplicativo Progressive Web App (PWA) moderno e dinâmico para gerenciar pedidos do iFood de forma rápida e eficiente.

## ✨ Características

- **📱 PWA Completo**: Instale no celular como um app nativo
- **💾 Funciona Offline**: Seus dados são salvos localmente
- **🎨 Design Premium**: Interface moderna com gradientes e animações suaves
- **⚡ Rápido e Responsivo**: Otimizado para dispositivos móveis
- **🔔 Notificações**: Feedback visual para todas as ações

## 🎯 Funcionalidades

### Status de Pedidos
- 🔴 **Em Preparo** (Vermelho) - Pedido sendo preparado
- 🟡 **Aguardando Motoboy** (Amarelo) - Pronto para entrega
- 🟢 **Entregue** (Verde) - Pedido finalizado

### Recursos
- ➕ Adicionar número de pedido
- 🔄 Alterar status com um clique
- 🗑️ Excluir pedidos com confirmação
- 📊 Estatísticas em tempo real
- 🔍 Filtros por status
- ⏱️ Tempo desde criação do pedido

## 🚀 Como Usar

### No Computador (Desenvolvimento)

1. **Abra o arquivo `index.html`** em qualquer navegador moderno (Chrome, Edge, Firefox)

2. **Ou use um servidor local** (recomendado para testar PWA):
   ```bash
   # Se tiver Python instalado:
   python -m http.server 8000
   
   # Se tiver Node.js instalado:
   npx serve
   ```

3. Acesse `http://localhost:8000` no navegador

### No Celular (Instalação PWA)

#### Android (Chrome/Edge)
1. Abra o aplicativo no navegador Chrome ou Edge
2. Toque no menu (⋮) e selecione **"Adicionar à tela inicial"**
3. Confirme a instalação
4. O ícone aparecerá na tela inicial como um app normal

#### iOS (Safari)
1. Abra o aplicativo no Safari
2. Toque no botão de compartilhar (□↑)
3. Role e selecione **"Adicionar à Tela de Início"**
4. Confirme a instalação

## 📖 Guia de Uso

### Adicionar um Pedido
1. Digite o número do pedido no campo de entrada
2. Clique em **"Adicionar Pedido"** ou pressione Enter
3. O pedido aparecerá automaticamente com status "Em Preparo"

### Alterar Status
1. Clique no botão do status desejado no card do pedido:
   - **🔴 Preparo** - Pedido em preparação
   - **🟡 Aguardando** - Esperando motoboy
   - **🟢 Entregue** - Pedido entregue

### Excluir um Pedido
1. Clique no botão de lixeira (🗑️) no card do pedido
2. Confirme a exclusão no modal que aparece

### Filtrar Pedidos
Use as abas no topo para filtrar por status:
- **Todos** - Mostra todos os pedidos
- **Em Preparo** - Apenas pedidos em preparo
- **Aguardando** - Apenas pedidos aguardando entrega
- **Entregues** - Apenas pedidos entregues

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Design moderno com variáveis CSS, gradientes e animations
- **JavaScript (ES6+)** - Lógica do aplicativo
- **Service Worker** - Funcionalidade offline
- **LocalStorage** - Persistência de dados
- **Web App Manifest** - Configuração PWA

## 📂 Estrutura de Arquivos

```
ifood-manager/
├── index.html          # Estrutura principal
├── style.css           # Estilos e design system
├── app.js             # Lógica da aplicação
├── service-worker.js  # Service worker para PWA
├── manifest.json      # Configuração do PWA
├── icon-*.png         # Ícones do app (vários tamanhos)
└── README.md          # Este arquivo
```

## 💡 Dicas

- **Dados Seguros**: Todos os pedidos são salvos no navegador (LocalStorage)
- **Backup**: Para não perder dados, não limpe o cache do navegador
- **Atualização**: O tempo é atualizado automaticamente a cada minuto
- **Vibração**: Em dispositivos compatíveis, há feedback por vibração

## 🎨 Personalização

Você pode personalizar as cores editando as variáveis CSS em `style.css`:

```css
:root {
    --color-preparing: #ef4444;    /* Vermelho */
    --color-waiting: #f59e0b;      /* Amarelo */
    --color-delivered: #10b981;    /* Verde */
    --color-accent: #8b5cf6;       /* Roxo */
    /* ... outras variáveis */
}
```

## 🔒 Privacidade

- **100% Local**: Todos os dados ficam armazenados apenas no seu dispositivo
- **Sem Internet Necessária**: Funciona completamente offline após instalação
- **Sem Rastreamento**: Não coletamos nenhum dado

## 🐛 Problemas Conhecidos

Se o PWA não instalar:
1. Certifique-se de estar usando HTTPS ou localhost
2. Verifique se os ícones foram criados corretamente
3. Limpe o cache do navegador e tente novamente

## 📝 Licença

Este projeto é de código aberto e pode ser usado livremente.

## 🤝 Suporte

Se tiver dúvidas ou problemas:
1. Verifique se todos os arquivos estão no mesmo diretório
2. Teste em um navegador moderno atualizado
3. Use as ferramentas de desenvolvedor (F12) para ver erros

---

**Desenvolvido com ❤️ para facilitar o gerenciamento de pedidos do iFood**
