// Ícones da interface em pixel art (mapas de pixels -> SVG com bordas nítidas), coerentes com o escritório.
// Cada '#' é um pixel pintado com currentColor; renderizados a 2 px de tela por pixel.

function pixelPaths(rows: readonly string[], palette: Readonly<Record<string, string>>): string {
  let out = '';
  for (const [ch, color] of Object.entries(palette)) {
    let d = '';
    rows.forEach((row, y) => {
      // Agrupa pixels consecutivos da linha num único retângulo.
      let x = 0;
      while (x < row.length) {
        if (row[x] !== ch) {
          x++;
          continue;
        }
        let run = 1;
        while (row[x + run] === ch) run++;
        d += `M${x} ${y}h${run}v1h-${run}z`;
        x += run;
      }
    });
    if (d) out += `<path fill="${color}" d="${d}"/>`;
  }
  return out;
}

export function pixelIcon(rows: readonly string[], palette: Readonly<Record<string, string>> = { '#': 'currentColor' }, cls = 'ui-px-icon'): string {
  const h = rows.length;
  const w = Math.max(...rows.map((r) => r.length));
  return `<svg class="${cls}" width="${w * 2}" height="${h * 2}" viewBox="0 0 ${w} ${h}" shape-rendering="crispEdges" aria-hidden="true" focusable="false">${pixelPaths(rows, palette)}</svg>`;
}

export const ICONS = {
  overview: pixelIcon([
    '###....###',
    '#........#',
    '#........#',
    '...####...',
    '...#..#...',
    '...#..#...',
    '...####...',
    '#........#',
    '#........#',
    '###....###',
  ]),
  zoomIn: pixelIcon([
    '..........',
    '....##....',
    '....##....',
    '....##....',
    '.########.',
    '.########.',
    '....##....',
    '....##....',
    '....##....',
    '..........',
  ]),
  zoomOut: pixelIcon([
    '..........',
    '..........',
    '..........',
    '..........',
    '.########.',
    '.########.',
    '..........',
    '..........',
    '..........',
    '..........',
  ]),
  sidebar: pixelIcon([
    '##########',
    '#..#.....#',
    '#..#.....#',
    '#..#.....#',
    '#..#.....#',
    '#..#.....#',
    '#..#.....#',
    '#..#.....#',
    '#..#.....#',
    '##########',
  ]),
  feed: pixelIcon([
    '##########',
    '#........#',
    '#........#',
    '#........#',
    '##########',
    '#.##.###.#',
    '#........#',
    '#.##.##..#',
    '#........#',
    '##########',
  ]),
  settings: pixelIcon([
    '....##....',
    '.#.####.#.',
    '..######..',
    '.###..###.',
    '####..####',
    '####..####',
    '.###..###.',
    '..######..',
    '.#.####.#.',
    '....##....',
  ]),
  help: pixelIcon([
    '..######..',
    '.##....##.',
    '.##....##.',
    '......##..',
    '.....##...',
    '....##....',
    '....##....',
    '..........',
    '....##....',
    '....##....',
  ]),
  maximize: pixelIcon([
    '..........',
    '.####.....',
    '.##.......',
    '.#.#......',
    '.#........',
    '........#.',
    '......#.#.',
    '.......##.',
    '.....####.',
    '..........',
  ]),
  restore: pixelIcon([
    '..........',
    '...#......',
    '...#......',
    '.###......',
    '..........',
    '..........',
    '......###.',
    '......#...',
    '......#...',
    '..........',
  ]),
  pencil: pixelIcon([
    '.......##.',
    '......#..#',
    '.....#..#.',
    '....#..#..',
    '...#..#...',
    '..#..#....',
    '.#..#.....',
    '.#.#......',
    '.##.......',
    '..........',
  ]),
  close: pixelIcon([
    '..........',
    '.##....##.',
    '.###..###.',
    '..######..',
    '...####...',
    '...####...',
    '..######..',
    '.###..###.',
    '.##....##.',
    '..........',
  ]),
  search: pixelIcon([
    '.####.....',
    '#....#....',
    '#....#....',
    '#....#....',
    '#....#....',
    '.####.....',
    '.....##...',
    '......##..',
    '.......##.',
    '........#.',
  ]),
  copy: pixelIcon([
    '...#######',
    '...#.....#',
    '...#.....#',
    '#######..#',
    '#.....#..#',
    '#.....#..#',
    '#.....####',
    '#.....#...',
    '#.....#...',
    '#######...',
  ]),
  check: pixelIcon([
    '..........',
    '.........#',
    '........##',
    '.......##.',
    '#.....##..',
    '##...##...',
    '.##.##....',
    '..###.....',
    '...#......',
    '..........',
  ]),
  follow: pixelIcon([
    '....##....',
    '....##....',
    '..######..',
    '.#......#.',
    '##..##..##',
    '##..##..##',
    '.#......#.',
    '..######..',
    '....##....',
    '....##....',
  ]),
  center: pixelIcon([
    '###....###',
    '#........#',
    '#........#',
    '....##....',
    '...####...',
    '...####...',
    '....##....',
    '#........#',
    '#........#',
    '###....###',
  ]),
  hand: pixelIcon([
    '...#.#....',
    '..#.#.#...',
    '..#.#.#.#.',
    '..#.#.#.#.',
    '..#######.',
    '#.#######.',
    '##.######.',
    '.########.',
    '..######..',
    '...####...',
  ]),
  warn: pixelIcon([
    '....##....',
    '...####...',
    '...#..#...',
    '..##..##..',
    '..##..##..',
    '.###..###.',
    '.########.',
    '####..####',
    '##########',
    '..........',
  ]),
  clock: pixelIcon([
    '..######..',
    '.#......#.',
    '#....#...#',
    '#....#...#',
    '#....###.#',
    '#........#',
    '#........#',
    '.#......#.',
    '..######..',
    '..........',
  ]),
  // Ampulheta (esperando o shell): moldura na cor do texto e areia âmbar caindo.
  hourglass: pixelIcon(
    [
      '#########',
      '.#sssss#.',
      '.#sssss#.',
      '..#sss#..',
      '...#s#...',
      '...#s#...',
      '..#.s.#..',
      '.#..s..#.',
      '.#.sss.#.',
      '#########',
    ],
    { '#': 'currentColor', s: '#f7c76b' },
  ),
  // Janela de terminal com o prompt ">_".
  terminal: pixelIcon([
    '##########',
    '#........#',
    '#.#......#',
    '#..#.....#',
    '#...#....#',
    '#..#.....#',
    '#.#..###.#',
    '#........#',
    '##########',
  ]),
  /** Pessoa com um +: novo agente (o + sozinho já é o "aproximar" da câmera). */
  newAgent: pixelIcon(['..##......', '.####.....', '.####...#.', '..##...###', '........#.', '.####.....', '######....', '######....']),
  delivery: pixelIcon(['...####...', '..#....#..', '.#......#.', '##########', '#....#...#', '#...###..#', '#....#...#', '#........#', '##########']),
  chevronLeft: pixelIcon(['....##', '...##.', '..##..', '.##...', '..##..', '...##.', '....##']),
  chevronRight: pixelIcon(['##....', '.##...', '..##..', '...##.', '..##..', '.##...', '##....']),
  mic: pixelIcon(['...##...', '..####..', '..####..', '..####..', '#.####.#', '#..##..#', '.#....#.', '..####..', '...##...', '..####..']),
  stopRec: pixelIcon(['........', '.######.', '.######.', '.######.', '.######.', '.######.', '.######.', '........']),
  attach: pixelIcon(['...###..', '..#...#.', '..#.#.#.', '..#.#.#.', '..#.#.#.', '..#.#.#.', '..#...#.', '...###..']),
  lock: pixelIcon(['..####..', '.##..##.', '.#....#.', '.#....#.', '########', '###..###', '###..###', '########', '########']),
  chevronDown: pixelIcon(['#......#', '##....##', '.##..##.', '..####..', '...##...']),
  chevronUp: pixelIcon(['...##...', '..####..', '.##..##.', '##....##', '#......#']),
  arrowDown: pixelIcon(['...##...', '...##...', '...##...', '#######.', '.#####..', '..###...', '...#....'].map((r) => r.padEnd(8, '.'))),
  /** Cidade do Habblaud World (botão Mundo): prédios de alturas diferentes. */
  city: pixelIcon(['......##..', '..##..##..', '..##.####.', '####.#..#.', '#..#.####.', '####.#..#.', '#..#.####.', '####.#..#.', '##########']),
  /** O escritório (botão de volta da cidade): um prédio com porta. */
  office: pixelIcon(['..######..', '..#.##.#..', '..######..', '..#.##.#..', '..######..', '..#.##.#..', '..##..##..', '..##..##..', '##########']),
} as const;

export type IconKey = keyof typeof ICONS;

/** Marca da AgentVila em pixels (usada quando /assets/brand/logo-mark.png não existe): prédios com janelas acesas. */
export const FALLBACK_MARK = pixelIcon(
  [
    '......o.........',
    '......#.........',
    '....#####.......',
    '....#lll#.......',
    '....#wbw#####...',
    '.####bwb#bbb#...',
    '.#bb#wbw#bwb#...',
    '.#wb#bbw#bbb#...',
    '.#bb#wbb#wbb#...',
    '.#bw#bwb#bbw#...',
    '.#bb#bdd#bbb#...',
    '.#bb#bdd#bbb#...',
    '################',
  ],
  { '#': '#16181f', l: '#c9d3e3', w: '#fac665', b: '#7cc0f0', d: '#f08a3c', o: '#f08a3c' },
  'ui-px-icon ui-mark',
);

/**
 * Logotipo "AgentVila" em pixels, com a mesma fonte bitmap da placa da marca (assets/brand/signage.png, gerada por
 * scripts/assets/pixelart.py): a Pixelify Sans não fica nítida nesse tamanho.
 * c = "Agent" (creme), t = "Vila" (âmbar), s = sombra de 1 px.
 */
export const WORDMARK_ROWS = [
  '.ccc.........................t...t..t..tt.......',
  'csssc....................c...t...t..s..st.......',
  'c...c..cccc..ccc..cccc..cccc.t...t.tt...t...ttt.',
  'ccccc.csssc.csssc.csssc.scss.t...t.st...t...ssst',
  'csssc.c...c.ccccc.c...c..c...st.ts..t...t...tttt',
  'c...c.c...c.cssss.c...c..c....t.t...t...t..tssst',
  'c...c.scccc.sccc..c...c..scc..sts..ttt.ttt.stttt',
  's...s..sssc..sss..s...s...ss...s...sss.sss..ssss',
  '.......cccs.....................................',
  '.......sss......................................',
] as const;

export const WORDMARK = pixelIcon(WORDMARK_ROWS, { s: 'rgba(6, 8, 14, 0.62)', c: '#f4f1ea', t: '#fac665' }, 'ui-wordmark');
