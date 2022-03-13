import { ApiBody } from '@nestjs/swagger';
import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Annuaire {
    @PrimaryGeneratedColumn()
    Identifiant_de_l_etablissement: string;

    @Column('text')
    Nom_etablissement:string;

    @Column('text')
    Type_etablissement:string;

    @Column('text')
    Statut_public_prive:string;

    @Column('text')
    Adresse_1:string;

    @Column('text')
    Adresse_2:string;

    @Column('text')
    Adresse_3:string;
    
    @Column('int')
    Code_postal:number;

    @Column('int')
    Code_commune:number;

    @Column('text')
    Nom_commune:string;

    @Column('int')
    Code_departement:number;

    @Column('int')
    Code_academie:number;

    @Column('int')
    Code_region:number;

    @Column()
    Ecole_maternelle:boolean;

    @Column()
    Ecole_eleACmentaire:boolean;

    @Column()
    Voie_generale:boolean;

    @Column()
    Voie_technologique:boolean;

    @Column()
    Voie_professionnelle:boolean;

    @Column('int')
    Telephone:number;

    @Column('int')
    Fax:number;

    @Column('text')
    Web:string;

    @Column('text')
    Mail:string;

    @Column()
    Restauration:boolean;

    @Column()
    Hebergement:boolean;

    @Column()
    ULIS:boolean;

    @Column()
    Apprentissage:boolean;

    @Column()
    Segpa:boolean;

    @Column()
    Section_arts:boolean;

    @Column()
    Section_cinema:boolean;

    @Column()
    Section_theatre:boolean;

    @Column()
    Section_sport:boolean;

    @Column()
    Section_internationale:boolean;

    @Column()
    Section_europeenne:boolean;

    @Column()
    Lycee_Agricole:boolean;

    @Column()
    Lycee_militaire:boolean;

    @Column()
    Lycee_des_metiers:boolean;

    @Column()
    Post_BAC:boolean;

    @Column('text')
    Appartenance_Education_Prioritaire:string;

    @Column()
    GRETA:boolean;

    @Column('int')
    SIREN_SIRET:number;

    @Column('int')
    Nombre_d_eleves:number;

    @Column('text')
    Fiche_onisep:string;

    @Column('text')
    position:string;

    @Column('text')
    Type_contrat_prive:string;

    @Column('text')
    Libelle_departement:string;

    @Column('text')
    Libelle_academie:string;

    @Column('text')
    Libelle_region:string;

    @Column()
    coordonnee_X:number;

    @Column()
    coordonnee_Y:number;

    @Column('text')
    epsg:string;

    @Column('text')
    nom_circonscription:string;

    @Column()
    latitude:number;

    @Column()
    longitude:number;

    @Column()
    precision_localisation:number;

    @Column({
        type:'datetime',
        nullable: true,
    })
    date_ouverture:string;

    @Column({
        type:'datetime',
        nullable: true,
    })
    date_maj_ligne:string;

    @Column('text')
    ministere_tutelle:string;

    @Column()
    etablissement_multi_lignes:boolean;

    @Column()
    rpi_concentre:boolean;

    @Column('int')
    rpi_disperse:number;

    @Column('int')
    code_nature:number;

    @Column('text')
    libelle_nature:string;

    @Column('int')
    Code_type_contrat_prive:number;

    @Column('text')
    PIAL:string;

    @Column('text')
    etablissement_mere:string;

    @Column('text')
    type_rattachement_etablissement_mere:string;

    @Column('text')
    code_bassin_formation:string;

    @Column('text')
    libelle_bassin_formation:string;

}