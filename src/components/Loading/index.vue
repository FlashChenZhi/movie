<template>
    <div class="loader"></div>
</template>

<script>
export default {
    name:"Loading"
}
</script>

<style scoped>
.loader {
  position: relative;
  width: 2.5em;
  height: 2.5em;
  transform: rotate(165deg);
}
 .loader:before,
 .loader:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0.5em;
    height: 0.5em;
    border-radius: 0.5em / 2;
    transform: translate(-50%, -50%);
  }
  
  .loader:before {
    animation: before 2s infinite;
  }

.loader:after {
    animation: after 2s infinite;
}

@keyframes before {
  0% {
    width: 0.5em;
    box-shadow:
     (2.5em - 0.5em) / 2 (-((2.5em - 0.5em) / 2 - 0.5em)) 
     nth(   hsla(337, 84, 48, 0.75)
            hsla(160, 50, 48, 0.75)
            hsla(190, 61, 65, 0.75)
            hsla( 41, 82, 52, 0.75), 1),
      (-((2.5em - 0.5em) / 2)) ((2.5em - 0.5em) / 2 - 0.5em) 
      nth(  hsla(337, 84, 48, 0.75)
            hsla(160, 50, 48, 0.75)
            hsla(190, 61, 65, 0.75)
            hsla( 41, 82, 52, 0.75), 3);
  }
  35% {
    width: 2.5em;
    box-shadow:
      0 (-((2.5em - 0.5em) / 2 - 0.5em)) 
      nth(  hsla(337, 84, 48, 0.75)
            hsla(160, 50, 48, 0.75)
            hsla(190, 61, 65, 0.75)
            hsla( 41, 82, 52, 0.75), 1), 0 ((2.5em - 0.5em) / 2 - 0.5em)  
      nth(  hsla(337, 84, 48, 0.75)
            hsla(160, 50, 48, 0.75)
            hsla(190, 61, 65, 0.75)
            hsla( 41, 82, 52, 0.75), 3);
  }
  70% {
    width: 0.5em;
    box-shadow:
      (-((2.5em - 0.5em) / 2)) (-((2.5em - 0.5em) / 2 - 0.5em))
    nth( hsla(337, 84, 48, 0.75)
         hsla(160, 50, 48, 0.75)
         hsla(190, 61, 65, 0.75)
         hsla( 41, 82, 52, 0.75), 1),
      (2.5em - 0.5em) / 2 ((2.5em - 0.5em) / 2 - 0.5em) 
    nth( hsla(337, 84, 48, 0.75)
         hsla(160, 50, 48, 0.75)
         hsla(190, 61, 65, 0.75)
         hsla( 41, 82, 52, 0.75), 3);
  }
  100% {
    box-shadow:
      (2.5em - 0.5em) / 2 (-((2.5em - 0.5em) / 2 - 0.5em)) 
    nth( hsla(337, 84, 48, 0.75)
         hsla(160, 50, 48, 0.75)
         hsla(190, 61, 65, 0.75)
         hsla( 41, 82, 52, 0.75), 1),
      (-((2.5em - 0.5em) / 2)) ((2.5em - 0.5em) / 2 - 0.5em)
    nth( hsla(337, 84, 48, 0.75)
         hsla(160, 50, 48, 0.75)
         hsla(190, 61, 65, 0.75)
         hsla( 41, 82, 52, 0.75), 3);
  }
}

@keyframes after {
  0% {
    height: 0.5em;
    box-shadow:
      ((2.5em - 0.5em) / 2 - 0.5em) ((2.5em - 0.5em) / 2) 
    nth( hsla(337, 84, 48, 0.75)
         hsla(160, 50, 48, 0.75)
         hsla(190, 61, 65, 0.75)
         hsla( 41, 82, 52, 0.75), 2),
      (-((2.5em - 0.5em) / 2 - 0.5em)) (-((2.5em - 0.5em) / 2)) 
    nth( hsla(337, 84, 48, 0.75)
         hsla(160, 50, 48, 0.75)
         hsla(190, 61, 65, 0.75)
         hsla( 41, 82, 52, 0.75), 4);
  }
  35% {
    height: 2.5em;
    box-shadow:
        ((2.5em - 0.5em) / 2 - 0.5em)  0 
    nth( hsla(337, 84, 48, 0.75)
         hsla(160, 50, 48, 0.75)
         hsla(190, 61, 65, 0.75)
         hsla( 41, 82, 52, 0.75), 2),
      (-((2.5em - 0.5em) / 2 - 0.5em)) 0 
    nth( hsla(337, 84, 48, 0.75)
         hsla(160, 50, 48, 0.75)
         hsla(190, 61, 65, 0.75)
         hsla( 41, 82, 52, 0.75), 4);
  }
  70% {
    height: 0.5em;
    box-shadow:
      ((2.5em - 0.5em) / 2 - 0.5em) (-((2.5em - 0.5em) / 2)) 
    nth( hsla(337, 84, 48, 0.75)
         hsla(160, 50, 48, 0.75)
         hsla(190, 61, 65, 0.75)
         hsla( 41, 82, 52, 0.75), 2),
      (-((2.5em - 0.5em) / 2 - 0.5em)) ((2.5em - 0.5em) / 2) 
    nth( hsla(337, 84, 48, 0.75)
         hsla(160, 50, 48, 0.75)
         hsla(190, 61, 65, 0.75)
         hsla( 41, 82, 52, 0.75), 4);
  }
  100% {
    box-shadow:
      ((2.5em - 0.5em) / 2 - 0.5em) ((2.5em - 0.5em) / 2) 
    nth( hsla(337, 84, 48, 0.75)
         hsla(160, 50, 48, 0.75)
         hsla(190, 61, 65, 0.75)
         hsla( 41, 82, 52, 0.75), 2),
      (-((2.5em - 0.5em) / 2 - 0.5em)) (-((2.5em - 0.5em) / 2)) 
    nth( hsla(337, 84, 48, 0.75)
         hsla(160, 50, 48, 0.75)
         hsla(190, 61, 65, 0.75)
         hsla( 41, 82, 52, 0.75),4);
  }
}

html,
body {
  height: 100%;
}

.loader {
  position: absolute;
  top:  calc(50% - 1.25em);
  left: calc(50% - 1.25em);
}

</style>
