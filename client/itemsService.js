import axios from "axios";

const url = 'http://localhost:5000/api/item/';

class ItemsService{
    // Get Collect
    static getItems() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }

    // Create Collect
    static insertItem(text){
        return axios.post(url, {
            name: text.name,
            price: text.price,
            manufacturer: text.manufacturer
        });
    }

    // Delete Collect
    static deleteItem(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default ItemsService; 