import adapter from '@sveltejs/adapter-vercel'

export default {
    kit: {
        adapter: adapter({
            // default options are shown
            out: 'build',
            precompress: false,
            envPrefix: '',
            polyfill: true
        })
    }
};