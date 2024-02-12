<script>
    import axios from "axios"
    import L from "leaflet"
    import markerIcon from 'leaflet/dist/images/marker-icon.png';
    import markerIconShadow from 'leaflet/dist/images/marker-shadow.png';

    let DefaultIcon = L.icon({
        iconUrl: markerIcon,
        shadowUrl: markerIconShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    export default {
        data(){
            return{
                association: {},

                map: null,
                marker: null
            }
        },
        
        mounted() {
            this.map = L.map('map').setView([48.93595, 2.3315], 16);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(this.map);
        },

        created: function(){
            this.getAssociationById();
        },
        
        methods:{
            async getAssociationById() {
                try {
                    const response = await axios.get(
                    `http://localhost:5000/associations/${this.$route.params.id}`
                    );
                    this.association = response.data;

                    this.marker = L.marker([this.association.association_longitude, this.association.association_latitude]).addTo(this.map);
                    this.marker.bindPopup(`${this.association.association_name}`);
                } catch (err) {
                    console.log(err);
                }
            },
        }, 

    }

</script>

<template>
    <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>
    </head>

    <div>

        <div>
            <h2>Identité de l'association</h2>
            <div>
                <p>Nom : {{ this.association.association_name }}</p>
                <p>Description :</p>
                <p>{{ this.association.association_description }}</p>
            </div>
        </div>

        <div>
            <h2>Représentant.e</h2>
            <div>
                <p>{{ this.association.association_representative_name }}</p>
                <p v-if="this.association.association_representative_surname != ''">{{ this.association.association_representative_surname }}</p>
            </div>
        </div>

        <div>
            <h2 v-if="this.association.association_mail != '' && this.association.association_phone != ''">Contacts</h2>
            <div>
                <p v-if="this.association.association_mail != ''">Courriel : {{ this.association.association_mail }}</p>
                <p v-if="this.association.association_phone != ''">Téléphone : {{ this.association.association_phone }}</p>
            </div>
        </div>

        <div>
            <h2>Coordonnées</h2>
            <div>
                <p>{{ this.association.association_adress }} <span v-if="this.association.association_complement_address != ''"> {{ this.association.association_complement_address }}</span> {{ this.association.association_postal_code }} {{ this.association.association_town }}</p>
            </div>
        </div>

        <div id="fullmap">
            <div id="map"></div>
        </div>

    </div>

</template>
 
<style scoped lang="scss">
    #fullmap{
        display: flex;
        justify-content: center;

        #map {
            height: 700px;
            width: 700px;
        }
    }
    </style>