# 📚 Exemplos de Uso - iFood Manager

## Cenário 1: Restaurante Recebendo Pedidos

### Situação Inicial
Seu restaurante acaba de abrir e começa a receber pedidos do iFood.

### Fluxo de Trabalho

**1. Novo Pedido Chega (10:30)**
```
📱 Notificação iFood: Pedido #54321
```
- Abra o app
- Digite: `54321`
- Clique "Adicionar Pedido"
- ✅ Pedido aparece em vermelho (Em Preparo)

**2. Cozinha Prepara (10:35)**
```
👨‍🍳 Pedido está sendo preparado na cozinha
```
- O pedido continua em vermelho (já está certo)
- Você vê: "há 5 minutos" no card

**3. Pedido Pronto (10:45)**
```
✓ Pedido embalado e pronto para entrega
```
- Clique no botão 🟡 **Aguardando**
- Card fica amarelo
- Estatísticas atualizam automaticamente

**4. Motoboy Chega (10:50)**
```
🏍️ Motoboy coletou o pedido
```
- Clique no botão 🟢 **Entregue**
- Card fica verde
- Você pode filtrar para ver só os pendentes

---

## Cenário 2: Horário de Pico (Vários Pedidos)

### Recebendo Múltiplos Pedidos

**10:00 - Chegam 5 pedidos:**
```
Pedido #10001 → Adicionar
Pedido #10002 → Adicionar
Pedido #10003 → Adicionar
Pedido #10004 → Adicionar
Pedido #10005 → Adicionar
```

**Estado no App:**
```
📊 Estatísticas:
Em Preparo: 5
Aguardando: 0
Entregues: 0
```

**10:15 - Primeiros 2 ficam prontos:**
- #10001 → Clique 🟡 Aguardando
- #10002 → Clique 🟡 Aguardando

**Estado Atualizado:**
```
📊 Estatísticas:
Em Preparo: 3
Aguardando: 2
Entregues: 0
```

**10:20 - Motoboy leva os 2 primeiros:**
- #10001 → Clique 🟢 Entregue
- #10002 → Clique 🟢 Entregue

**10:25 - Mais 2 ficam prontos:**
- #10003 → Clique 🟡 Aguardando
- #10004 → Clique 🟡 Aguardando

**Estado Final (10:30):**
```
📊 Estatísticas:
Em Preparo: 1  (#10005)
Aguardando: 2  (#10003, #10004)
Entregues: 2   (#10001, #10002)
```

---

## Cenário 3: Usando os Filtros

### Situação
Você tem 20 pedidos misturados e precisa organizar

**Uso dos Filtros:**

1️⃣ **Ver o que está na cozinha:**
```
Clique na aba "Em Preparo"
→ Mostra só pedidos vermelhos
→ Você sabe quantos ainda estão sendo feitos
```

2️⃣ **Ver o que está esperando entrega:**
```
Clique na aba "Aguardando"
→ Mostra só pedidos amarelos
→ Você sabe o que o motoboy pode levar
```

3️⃣ **Ver histórico do dia:**
```
Clique na aba "Entregues"
→ Mostra só pedidos verdes
→ Você vê quantos já foram entregues
```

4️⃣ **Ver tudo:**
```
Clique na aba "Todos"
→ Volta a mostrar todos os pedidos
```

---

## Cenário 4: Gerenciando Erros

### Pedido Digitado Errado

**Problema:**
```
Você digitou #12345 mas era #12346
```

**Solução:**
```
1. Clique na lixeira (🗑️) do pedido errado
2. Confirme a exclusão
3. Digite o número correto
4. Adicione novamente
```

### Pedido Cancelado

**Problema:**
```
Cliente cancelou o pedido #99999
```

**Solução:**
```
1. Encontre o pedido #99999
2. Clique na lixeira (🗑️)
3. Confirme a exclusão
4. Pronto! Pedido removido
```

---

## Cenário 5: Final do Dia

### Revisão Diária

**Ver Resumo do Dia:**
```
📊 No topo veja:
- Quantos ainda estão em preparo (deveria ser 0)
- Quantos estão aguardando (deveria ser 0)
- Quantos foram entregues (total do dia!)
```

**Limpar Pedidos Antigos:**
```
Se quiser começar limpo amanhã:
1. Clique na aba "Entregues"
2. Exclua os pedidos verdes (já entregues)
3. Ou deixe como histórico
```

**Dica:** Os pedidos ficam salvos automaticamente, mesmo fechando o app!

---

## Cenário 6: Usando em Múltiplos Dispositivos

### Setup Multi-Dispositivo

**Restaurante com várias estações:**

**📱 Caixa (Recepção):**
- Adiciona pedidos novos
- Marca como aguardando
- Marca como entregue

**💻 Cozinha:**
- Vê pedidos em preparo
- Usa filtro "Em Preparo"
- Monitora tempo

**📱 Atendente:**
- Vê pedidos aguardando
- Usa filtro "Aguardando"
- Organiza entregas

---

## Dicas Práticas

### ⚡ Atalhos Rápidos
- **Enter** após digitar → Adiciona pedido
- **Clique no card** → Vê detalhes
- **Números nas abas** → Quantidades em tempo real

### 🎯 Organização
- Mantenha "Em Preparo" o mais baixo possível
- "Aguardando" indica pedidos prontos
- Limpe "Entregues" periodicamente (ou não)

### 💾 Backup
- Dados salvos automaticamente
- Não precisa clicar em "salvar"
- Funciona offline
- Não perde dados ao fechar

### 🎨 Visual
- **Vermelho** = Urgente (em preparo)
- **Amarelo** = Atenção (esperando)
- **Verde** = Concluído (entregue)

---

## Fluxo Completo Exemplo

```
1. 📱 Novo pedido #77777 chega
   → Digite 77777
   → Adicionar
   → Status: 🔴 Em Preparo

2. 👨‍🍳 Cozinha prepara (10 min)
   → Nada a fazer
   → Monitore o tempo no card

3. ✅ Pedido pronto
   → Clique 🟡 Aguardando
   → Status: 🟡 Aguardando Motoboy

4. 🏍️ Motoboy coleta
   → Clique 🟢 Entregue
   → Status: 🟢 Entregue

5. 📊 Final
   → Pedido fica no histórico
   → Pode excluir ou manter
```

---

## Casos Especiais

### Pedido Prioritário
```
Use o tempo no card para ver os mais antigos
Pedidos mais antigos aparecem "há X minutos"
Priorize os que estão esperando há mais tempo
```

### Muitos Pedidos Iguais
```
Adicione letras ao número:
#12345-A
#12345-B
#12345-C
```

### Pedido em Lote
```
Se um motoboy leva 3 pedidos:
- Marque todos como entregue
- Use o filtro "Aguardando" para facilitar
```

---

🎉 **Com essas práticas, você terá controle total dos seus pedidos!**
