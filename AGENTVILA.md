# AgentVila

AgentVila é o escritório virtual dos seus agentes de IA (Claude Code e Codex), distribuído com instalação guiada,
toolkit e receitas por nicho.

**Powered by [Habblaud](https://github.com/marmottajr/habblaud)**, de Márcio Junior, sob licença MIT (veja
[LICENSE](LICENSE)). Este repositório é o Habblaud com a marca AgentVila aplicada só no que aparece na tela.

## O que muda em relação ao Habblaud

- `shared/i18n.ts`: `tr()` troca "Habblaud" por `BRAND` em todo texto da interface (desligado no Vitest; `setBrand`).
- `client/src/ui/icons.ts` e `styles.css`: logotipo pixel "AgentVila".
- `scripts/assets/pixelart.py` e `client/public/assets/brand/signage*.png`: placa da recepção.
- `client/index.html`, `manifest.webmanifest`, `server/http/remote.ts`, `notify.ts`, `widgets.ts`, `overlay.ts`: nome fixo.
- `package.json`: `repository` aponta para `agentvila/agentvila`, então o aviso de versão nova olha as releases daqui.

O Habblaud World fica desligado pela instalação da AgentVila (`HABBLAUD_WORLD=0` no `.env`), porque usa um
servidor de terceiros.

## Atualizar a partir do Habblaud

```bash
git fetch upstream
git merge upstream/main
npm install && npm run typecheck && npm test && npm run build
```

Se o merge der conflito, ele fica nos arquivos listados acima. Depois de testar, publique uma release nova aqui.
