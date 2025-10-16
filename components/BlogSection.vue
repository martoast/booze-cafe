<template>
    <section id="blog" class="py-medium">
      <div class="container mx-auto px-4">
        <div class="text-center lg:w-1/2 mx-auto">
          <h3 class="font-heading text-7xl md:text-8xl lg:text-9xl">News Articles</h3>
          <h6 class="text-body font-light mt-2">
            Blandit enim pretium purus morbi non tincidunt auctor eu molestie. Vitae eu nullam tincidunt accumsan.
          </h6>
        </div>
        <div class="mt-12 max-w-4xl mx-auto">
          <div v-for="(article, index) in articles" :key="article.title" 
               class="flex flex-col sm:flex-row items-center gap-6 py-4 border-k-border"
               :class="{ 'border-t': index > 0, 'border-b': index < articles.length }">
            <div class="w-full sm:w-1/3 flex-shrink-0">
              <img :src="article.image" class="w-full h-auto object-cover aspect-[4/3]">
            </div>
            <div class="text-left">
              <h6 class="font-heading text-lg text-accent">{{ article.category }}</h6>
              <h5 class="font-heading text-3xl mt-1 hover:text-accent cursor-pointer">{{ article.title }}</h5>
            </div>
          </div>
          <div class="text-center mt-12">
            <a href="#" class="btn-primary">View All Articles</a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const articles = [
    { category: 'Cafe', title: 'Exploring the Growing Trend and Art of Craft', image: '/2.jpg' },
    { category: 'Topics', title: 'The Science Behind Your Daily Cup of Joy', image: '/5.jpg' },
    { category: 'Category', title: 'A Journey Through Different Brewing Methods', image: '/7.jpg' },
  ];
  </script>
  
