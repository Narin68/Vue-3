import { ref } from 'vue';
const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            let res = await fetch("http://localhost:3000/posts");
            if (!res.ok) {
                throw "Data not available";
            }
            posts.value = await res.json();
        } catch (e) {
            error.value = e;
        }
    };

    return { posts, error, load };
}


export default getPosts 