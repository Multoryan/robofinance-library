<template>
<div id="app" class="app">
    <router-view />
</div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap');

* {
    box-sizing: border-box;
}

body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;
}

.app {
    min-height: 100vh;
}
</style>
