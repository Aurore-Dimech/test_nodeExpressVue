<script>
    import axios from "axios"

    export default {
        data(){
            return{
                association: {
                    association_name: "",
                    association_description: "",
                    association_category: "",
                    association_representative_name: "",
                    association_representative_surname: "",
                    association_mail: "",
                    association_phone: "",
                    association_adress: "",
                    association_town: "",
                    association_postal_code: "",
                    association_complement_address: "",
                    association_longitude: "",
                    association_latitude: ""
                }  
            }
        },

        created: function(){
            this.getAssociationById();
        },

        methods:{
            async getAssociationById(){
                try{
                    const response = await axios.get(`http://localhost:5000/associations/${this.$route.params.id}`);
                        
                    this.association = {
                        association_name: response.data.association_name,
                        association_description: response.data.association_description,
                        association_category: response.data.association_category,
                        association_representative_name: response.data.association_representative_name,
                        association_representative_surname: response.data.association_representative_surname,
                        association_mail: response.data.association_mail,
                        association_phone: response.data.association_phone,
                        association_adress: response.data.association_adress,
                        association_town: response.data.association_town,
                        association_postal_code: response.data.association_postal_code,
                        association_complement_address: response.data.association_complement_address,
                        association_longitude: response.data.association_longitude,
                        association_latitude: response.data.association_latitude
                    }
                } catch(err){
                    console.log(err)
                }
            },

            async updateAssociation(){
                try{
                    await axios.put(`http://localhost:5000/associations/${this.$route.params.id}`, this.association);
                        
                    this.association = {
                        association_name: "",
                        association_description: "",
                        association_category: "",
                        association_representative_name: "",
                        association_representative_surname: "",
                        association_mail: "",
                        association_phone: "",
                        association_adress: "",
                        association_town: "",
                        association_postal_code: "",
                        association_complement_address: "",
                        association_longitude: "",
                        association_latitude: ""
                    }
                } catch(err){
                    console.log(err.response.data)
                }
            }
        }
    }

</script>

<template>

    <div>

        <div>
            <label>Identité de l'association</label>
            <div>
                <input type="text" placeholder="Nom" v-model="association.association_name">
                <p class="error" v-if="association.association_name.length <= 0">Champ obligatoire</p>
                <input type="text" placeholder="Description" v-model="association.association_description">
                <select name="category" id="category" v-model="association.association_category">
                    <option value="main" disabled selected>Catégorie</option>
                    <option value="sport">sport</option>
                    <option value="santé">santé</option>
                    <option value="culture">culture</option>
                    <option value="education">education</option>
                </select>
            </div>
        </div>

        <div>
            <label>Représentant.e</label>
            <div>
                <input type="text" placeholder="Nom" v-model="association.association_representative_name">
                <input type="text" placeholder="Prénom" v-model="association.association_representative_surname">
            </div>
        </div>

        <div>
            <label>Contacts</label>
            <div>
                <input type="email" placeholder="Courriel" v-model="association.association_mail">
                <input type="tel" placeholder="Téléphone" v-model="association.association_phone">
            </div>
        </div>

        <div>
            <label>Coordonnées</label>
            <div>
                <input type="text" placeholder="Voie/ Rue" v-model="association.association_adress">
                <input type="text" placeholder="Complément d'adresse" v-model="association.association_complement_address">
                <input type="text" placeholder="Ville" v-model="association.association_town">
                <input type="text" placeholder="Code postal" v-model="association.association_postal_code">
                <input type="text" placeholder="Longitude" v-model="association.association_longitude">
                <input type="text" placeholder="Latitude" v-model="association.association_latitude">
            </div>
        </div>

        <div>
            <button @click="updateAssociation">Enregistrer</button>
        </div>

    </div>

</template>
  
<style>
  
</style>
  