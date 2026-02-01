# 🚀 Início Rápido - iFood Manager

## ⚡ Como Usar AGORA (Mais Simples)

### Opção 1: Teste Básico (Funcionalidade Completa)
1. **Abra o arquivo `index.html`** com duplo clique
2. Ele abrirá no seu navegador padrão
3. **Pronto!** Você já pode usar:
   - ✅ Adicionar pedidos
   - ✅ Alterar status
   - ✅ Excluir pedidos
   - ✅ Filtrar por status
   - ✅ Dados salvos automaticamente

**Limitação:** Service Worker não funcionará (sem funcionalidade offline avançada)

---

### Opção 2: PWA Completo (Recomendado para Celular)

#### Passo 1: Instalar um Servidor HTTP

**Mais Fácil - Node.js (se não tiver, baixe em nodejs.org):**
```bash
# Abra o PowerShell nesta pasta e execute:
npx serve
```

**Alternativa - Visual Studio Code:**
1. Abra esta pasta no VS Code
2. Instale a extensão "Live Server"
3. Clique com botão direito em `index.html`
4. Selecione "Open with Live Server"

#### Passo 2: Acessar no Celular

1. **No computador:** Anote o endereço IP mostrado (ex: `http://192.168.1.100:3000`)
2. **No celular:** 
   - Conecte-se à **mesma rede WiFi**
   - Abra o navegador
   - Digite o endereço IP

#### Passo 3: Instalar como App

**Android (Chrome):**
- Toque nos 3 pontos (⋮) → "Adicionar à tela inicial"

**iPhone (Safari):**
- Toque em Compartilhar (ícone compartilhar) → "Adicionar à Tela de Início"

---

## 📱 Demonstração Visual

Veja como ficará o aplicativo:

![Screenshot do App](../app_screenshot_demo_1769913751581.png)

---

## 🎯 Recursos Principais

### 1️⃣ Adicionar Pedido
- Digite o número no campo
- Clique "Adicionar Pedido" ou pressione Enter
- Pedido aparece automaticamente em "Em Preparo" (vermelho)

### 2️⃣ Status dos Pedidos
- 🔴 **Em Preparo** (Vermelho) - Pedido sendo preparado
- 🟡 **Aguardando** (Amarelo) - Esperando o motoboy
- 🟢 **Entregue** (Verde) - Pedido entregue

### 3️⃣ Alterar Status
Click nos botões coloridos do pedido:
- Clique em "🔴 Preparo" → marca como em preparo
- Clique em "🟡 Aguardando" → marca como aguardando motoboy  
- Clique em "🟢 Entregue" → marca como entregue

### 4️⃣ Excluir Pedido
- Clique no ícone de lixeira (🗑️)
- Confirme a exclusão

### 5️⃣ Filtrar Pedidos
Use as abas no topo:
- **Todos** - Ver todos os pedidos
- **Em Preparo** - Apenas em preparo
- **Aguardando** - Apenas aguardando
- **Entregues** - Apenas entregues

---

## 💡 Dicas

✅ **Dados Seguros:** Tudo fica salvo no navegador automaticamente  
✅ **Sem Internet:** Funciona offline após instalação (PWA)  
✅ **Rápido:** Interface otimizada para celular  
✅ **Notificações:** Feedback visual para cada ação  
✅ **Tempo Real:** Mostra há quanto tempo o pedido foi criado  

---

## 🎨 Design Moderno

- **Dark Mode** premium com gradientes
- **Glassmorphism** (efeito de vidro nos cards)
- **Animações suaves** ao adicionar/remover
- **Cores vibrantes** para fácil visualização
- **Responsivo** - funciona em qualquer tela

---

## ❓ Problemas?

### "O app não salva os dados"
- Não use modo anônimo
- Não limpe o cache do navegador

### "PWA não instala"
- Precisa usar servidor HTTP (opção 2)
- Não funciona abrindo direto o arquivo

### "Ícones não aparecem"
- Os ícones já foram criados automaticamente
- Se faltar algum, todos estão na pasta

---

## 📞 Início Imediato

**Para começar AGORA mesmo:**

1. Dê duplo clique em `index.html`
2. Digite um número de pedido
3. Clique em "Adicionar Pedido"
4. **Pronto!** 🎉

**Para usar no celular como app:**
- Siga a "Opção 2" acima

---

✨ **Desenvolvido para facilitar seu trabalho com pedidos do iFood!**
