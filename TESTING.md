# ✅ Checklist de Teste - iFood Manager

## 📋 Testes Básicos

### Adicionar Pedido
- [ ] Abrir `index.html` diretamente no navegador
- [ ] Digitar um número de pedido (ex: "12345")
- [ ] Clicar em "Adicionar Pedido"
- [ ] Verificar se o pedido aparece com status "Em Preparo" (vermelho)

### Alterar Status
- [ ] Clicar no botão "🟡 Aguardando" em um pedido
- [ ] Verificar se o card muda para cor amarela
- [ ] Clicar no botão "🟢 Entregue"
- [ ] Verificar se o card muda para cor verde

### Estatísticas
- [ ] Verificar se os números no topo atualizam automaticamente
- [ ] Adicionar vários pedidos e conferir contadores

### Filtros
- [ ] Clicar na aba "Em Preparo"
- [ ] Verificar se mostra apenas pedidos em preparo
- [ ] Testar outros filtros

### Excluir Pedido
- [ ] Clicar no botão de lixeira (🗑️)
- [ ] Verificar se aparece modal de confirmação
- [ ] Clicar em "Excluir"
- [ ] Verificar se o pedido foi removido

### Persistência
- [ ] Adicionar alguns pedidos
- [ ] Fechar o navegador
- [ ] Abrir novamente
- [ ] Verificar se os pedidos continuam lá

---

## 📱 Testes Mobile (Opcional - Para testar PWA completo)

### Pré-requisito: Servidor HTTP

**Opção 1 - Node.js:**
```bash
npx serve
```

**Opção 2 - Live Server (VS Code):**
- Instalar extensão "Live Server"
- Clicar com botão direito em index.html
- Selecionar "Open with Live Server"

**Opção 3 - Outro servidor:**
```bash
# Qualquer servidor HTTP funcionará
```

### Instalação Android
- [ ] Abrir no Chrome mobile
- [ ] Tocar nos 3 pontos (⋮)
- [ ] Selecionar "Adicionar à tela inicial"
- [ ] Tocar no ícone na tela inicial
- [ ] Verificar se abre como app nativo

### Instalação iOS
- [ ] Abrir no Safari
- [ ] Tocar no botão compartilhar
- [ ] Selecionar "Adicionar à Tela de Início"
- [ ] Tocar no ícone
- [ ] Verificar se abre como app

### Funcionalidade Offline
- [ ] Instalar o PWA
- [ ] Usar normalmente
- [ ] Desligar WiFi/Dados móveis
- [ ] Abrir o app
- [ ] Verificar se funciona offline
- [ ] Adicionar/editar pedidos
- [ ] Religar internet
- [ ] Verificar se dados persistiram

---

## 🎨 Verificação Visual

### Design
- [ ] Fundo gradiente escuro (azul/roxo)
- [ ] Cards com efeito de vidro (glassmorphism)
- [ ] Animações suaves ao adicionar pedidos
- [ ] Hover effects nos botões
- [ ] Cores corretas:
  - Vermelho para "Em Preparo"
  - Amarelo para "Aguardando"
  - Verde para "Entregue"

### Responsividade
- [ ] Testar em tela pequena (mobile)
- [ ] Testar em tela média (tablet)
- [ ] Testar em tela grande (desktop)
- [ ] Verificar se layout se adapta

---

## 🐛 Possíveis Problemas e Soluções

### PWA não instala
**Solução:** Use um servidor HTTP (não pode ser file://)

### Dados não salvam
**Solução:** Não limpe o cache do navegador ou use modo anônimo

### Ícones não aparecem
**Solução:** Copie o arquivo `app_icon_512_*.png` e renomeie para:
- icon-72x72.png
- icon-96x96.png
- icon-128x128.png
- icon-144x144.png
- icon-152x152.png
- icon-192x192.png
- icon-384x384.png
- icon-512x512.png

### Service Worker não funciona
**Solução:** Só funciona em HTTPS ou localhost (não em file://)

---

## 📝 Notas

- Para testar PWA completo, DEVE usar um servidor HTTP
- Para testar apenas a funcionalidade, pode abrir `index.html` direto
- Todos os dados ficam salvos no navegador (localStorage)
- Não precisa de backend ou banco de dados

---

**Status do Projeto:** ✅ Pronto para uso!
