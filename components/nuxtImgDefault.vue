<template>
    <div ref="imgctnr" class="w-auto h-auto border border-blue-600 p-0">
        <nuxt-img 
            src="/roberto-nickson.jpg"
            sizes="sm:300px md:400px lg:600px"
        />
    </div>
    <p class="fixed top-0 left-0">W: {{ domrect.width }}px | H: {{ domrect.height }}px</p>
</template>
<!-- 
    'sizes' above corresponds to width of the image
    The screen sizes predefined by `@nuxt/image`:
    same as Tailwind breakpoints
    image: {
        screens: {
        xs: 320,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536,
        '2xl': 1536
        },
    }
 -->
<!-- template ref cant seem to work directly on <nuxt-img> -->
<!-- so this method tries to wrap nuxt-img in a container, and use template ref on that container instead -->

<script setup>
    const nuxtimgref = ref(null)
    const imgctnr = ref(null)
    const domrect = reactive({
        width: undefined,
        height: undefined,
    })
    const imgrect = reactive({
        width: undefined,
        height: undefined,
    })

    onMounted(()=>{
        console.log(nuxtimgref);
        console.log(nuxtimgref.value);      // will get a ref instead of a DOM element
        console.log(imgctnr.value);
        console.log(imgctnr.value.firstElementChild.width);     // can only access the img DOM this way

        domrect.width = imgctnr.value.getBoundingClientRect().width
        domrect.height = imgctnr.value.getBoundingClientRect().height
        window.addEventListener('resize', ()=>{
            domrect.width = imgctnr.value.getBoundingClientRect().width.toFixed(0)
            domrect.height = imgctnr.value.getBoundingClientRect().height.toFixed(0)            
        })
    })    
</script>