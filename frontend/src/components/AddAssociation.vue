<script>
    import axios from "axios"

    export default {
        data(){
            return{
                associationName: "",
                associationDesc: "",
                associationRepName: "",
                associationRepSurname: "",
                associationMail: "",
                associationPhone: "",
                associationAddress: "",
                associationTown: "",
                associationPostalCode: "",
                associationComplementAddress: "",
                associationLng: "",
                associationLat: ""
            }
        },

        methods:{
            async saveAssociation(){
                try{
                    await axios.post("http://localhost:5000/associations", {
                        association_name: this.associationName,
                        association_description: this.associationDesc,
                        association_representative_name: this.associationRepName,
                        association_representative_surname: this.associationRepSurname,
                        association_mail: this.associationMail,
                        association_phone: this.associationPhone,
                        association_adress: this.associationAddress,
                        association_town: this.associationTown,
                        association_postal_code: this.associationPostalCode,
                        association_complement_address: this.associationComplementAddress,
                        association_longitude: this.associationLng,
                        association_latitude: this.associationLat
                    })
                    this.associationName="",
                    this.associationDesc="",
                    this.associationRepName= "",
                    this.associationRepSurname= "",
                    this.associationMail= "",
                    this.associationPhone= "",
                    this.associationAddress= "",
                    this.associationTown= "",
                    this.associationPostalCode= "",
                    this.associationComplementAddress= "",
                    this.associationLng= "",
                    this.associationLat= ""
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
                <input type="text" placeholder="Nom de l'association" v-model="associationName">
                <p class="error" v-if="associationName.length <= 0">Champ obligatoire</p>
                <textarea v-model="associationDesc">Description</textarea>
            </div>
        </div>

        <div>
            <label>Représentant.e</label>
            <div>
                <input type="text" placeholder="Nom" v-model="associationRepName">
                <input type="text" placeholder="Prénom" v-model="associationRepSurname">
            </div>
        </div>

        <div>
            <label>Contacts</label>
            <div>
                <input type="email" placeholder="Courriel" v-model="associationMail">
                <input type="tel" placeholder="Téléphone" v-model="associationPhone">
            </div>
        </div>

        <div>
            <label>Coordonnées</label>
            <div>
                <input type="text" placeholder="Voie/ Rue" v-model="associationAddress">
                <input type="text" placeholder="Complément d'adresse" v-model="associationComplementAddress">
                <input type="text" placeholder="Ville" v-model="associationTown">
                <input type="text" placeholder="Code postal" v-model="associationPostalCode">
                <input type="text" placeholder="Longitude" v-model="associationLng">
                <input type="text" placeholder="Latitude" v-model="associationLat">
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
  