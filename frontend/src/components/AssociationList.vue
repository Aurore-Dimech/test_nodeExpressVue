<script>
    import axios from "axios"

    export default {
        data(){
            return{
                items:[],
            }
        },

        created(){
            this.getAssociations();
        },

        methods:{
            async getAssociations(){
                try {
                    const response = await axios.get("http://localhost:5000/associations");
                    this.items = response.data
                } catch(err) {
                    console.log(err)
                }
            },

            async deleteAssociation(id){
                try{
                    await axios.delete(
                        `http://localhost:5000/associations/${id}`
                    )
                    this.getAssociations()
                }catch(err){
                    console.log(err)
                }
            }
        }
    }
</script>

<template>

    <div>
        <router-link :to="{name:'Create'}" id="newAsso">+</router-link>

        <table>

            <thead>
                <tr>
                    <th>Association</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="item in items" :key='item.association_id'>
                    <td>
                        <router-link :to="{name:'SingleAsso', params:{id: item.association_id}}">{{ item.association_name }}</router-link>
                    </td>
                    <td>
                        <router-link :to="{name:'Edit', params:{id: item.association_id}}">Modifier</router-link>
                        <button @click="deleteAssociation(item.association_id)">Supprimer</button>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>



</template>

<style scoped lang="scss">

#newAsso{
    position: fixed;
    background-color: gray;
    height: 50px;
    width: 50px;
    bottom: 15%;
    right: 10%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    text-decoration: none;
    color: white;
}
table{
    // margin: 20px 50px;
    width: 100vw;

    tr{
        display: flex;
        justify-content: space-evenly;

        th{
            padding: 1% 5%;
            border: 1px solid grey;
        }
    }
}
</style>