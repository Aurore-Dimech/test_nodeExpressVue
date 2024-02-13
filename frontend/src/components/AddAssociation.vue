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

        methods:{
            async saveAssociation(){
                try{
                    await axios.post("http://localhost:5000/associations", this.association);
                        
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
                <input type="text" placeholder="Nom de l'association" v-model="association.association_name">
                <p class="error" v-if="association.association_name.length <= 0">Champ obligatoire</p>
                <textarea v-model="association.association_description">Description</textarea>
                <select name="category" id="category" v-model="association.association_category">
                    <option value="" disabled selected>Catégorie</option>
                    <option value="sport">sport</option>
                    <option value="health">santé</option>
                    <option value="culture">culture</option>
                    <option value="education">education</option>
                </select>
                <!-- category NOT NULL -->
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
            <button @click="saveAssociation">Enregistrer</button>
        </div>

    </div>

</template>
  
<style>
.error{
    color : red;
}
</style>
  