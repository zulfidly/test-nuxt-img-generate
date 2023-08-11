<template>
    <div ref="imgctnr" class="w-auto h-auto border border-red-600 p-0">
        <NuxtImg 
            provider="storyblok"
            sizes="sm:300px md:400px lg:600px"
            src="https://a.storyblok.com/f/242384/536x750/226f4e41d5/2023-07-21-event1.jpg" 
            />
            
        </div>
    </template>
        <!-- provider="storyblok" -->
            <!-- https://a.storyblok.com/f/242384/536x750/226f4e41d5/2023-07-21-event1.jpg -->
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

onMounted(() => {
    console.log(nuxtimgref);
    console.log(nuxtimgref.value);      // will get a ref instead of a DOM element
    console.log(imgctnr.value);
    console.log(imgctnr.value.firstElementChild.width);     // can only access the img DOM this way

    domrect.width = imgctnr.value.getBoundingClientRect().width
    domrect.height = imgctnr.value.getBoundingClientRect().height
    window.addEventListener('resize', () => {
        domrect.width = imgctnr.value.getBoundingClientRect().width.toFixed(0)
        domrect.height = imgctnr.value.getBoundingClientRect().height.toFixed(0)
    })
})    
</script>