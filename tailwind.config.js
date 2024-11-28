/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Arquivo principal no root
    "./src/**/*.{html,js,jsx}", // Todos os arquivos HTML, JS e JSX dentro da pasta src
    "./*.{html,js}", // Qualquer HTML ou JS fora da pasta src
  ],
  theme: {
    extend: {}, // Para adicionar customizações ao Tailwind futuramente
  },
  safelist: [
    // Classes dinâmicas que você usa e que podem ser removidas pelo PurgeCSS em produção
    "border-solid",
    "border-2",
    "border-blue-700",
    "shadow-blue-700",
    "rounded-xl",
    "shadow-xl",
    "h-96",
    "w-52",
    "m-2",
    "flex",
    "flex-col",
    "p-2",
    "justify-between",
    "group",
    "feminino",
    "masculino",
  ],
  plugins: [], // Adicione plugins aqui se necessário, como forms ou typography
};
