self.addEventListener('install', (e) => {
  console.log('A2U установлен!');
});

self.addEventListener('fetch', (e) => {
  // Просто пропускаем все запросы
});
