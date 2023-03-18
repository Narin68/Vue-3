import { ref } from 'vue';
const getPostDetail = (id) => {
    const post = ref({});
    const error = ref(null);

    const load = async () => {
        try {
            let res = await fetch("http://localhost:3000/posts/" + id);
            if (!res.ok) {
                throw "Data not available";
            }
            post.value = await res.json();
        } catch (e) {
            error.value = e;
        }
    };

    return { post, error, load };
}

export default getPostDetail;