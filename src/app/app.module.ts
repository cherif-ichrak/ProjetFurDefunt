import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ParametrageComponent } from './components/parametrage/parametrage.component';
import { UsersComponent } from './components/users/users.component';
import { NgModule } from '@angular/core';
import { IdentificationComponent } from './components/identification/identification.component';
import { GroupesComponent } from './components/groupes/groupes.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SouchesNomComponent } from './components/souches-nom/souches-nom.component';
import { FournisseursComponent } from './components/fournisseurs/fournisseurs.component';
import { AjouterFournisseurComponent } from './components/ajouter-fournisseur/ajouter-fournisseur.component';
import { ModifierFournisseursComponent } from './components/modifier-fournisseurs/modifier-fournisseurs.component';
import { AlertesFournisseursComponent } from './components/alertes-fournisseurs/alertes-fournisseurs.component';
import { ComplementsFournisseurComponent } from './components/complements-fournisseur/complements-fournisseur.component';
import { ContratDomTraitmentComponent } from './components/contrat-dom-traitment/contrat-dom-traitment.component';
import { CaisseComponent } from './components/caisse/caisse.component';
import { AfficherCaisseComponent } from './components/afficher-caisse/afficher-caisse.component';
import { DepenseServicesComponent } from './components/depense-services/depense-services.component';
import { OrdrePaiementComponent } from './components/ordre-paiement/ordre-paiement.component';

import { FacturesComponent } from './components/factures/factures.component';
import { BiblioComponent } from './components/biblio/biblio.component';
import { BrouillardCaisseComponent } from './components/brouillard-caisse/brouillard-caisse.component';
import { BulletinCaisseComponent } from './components/bulletin-caisse/bulletin-caisse.component';
import { BulletinDepenseComponent } from './components/bulletin-depense/bulletin-depense.component';
import { BordereauVersementEspeceComponent } from './components/bordereau-versement-espece/bordereau-versement-espece.component';
import { BordereauVersementChequeComponent } from './components/bordereau-versement-cheque/bordereau-versement-cheque.component';
import { ImprimerOrdrePaiementComponent } from './components/imprimer-ordre-paiement/imprimer-ordre-paiement.component';
import { AjouterOPComponent } from './components/ajouter-op/ajouter-op.component';
import { CertificatRSComponent } from './components/certificat-rs/certificat-rs.component';
import { TdbComponent } from './components/tdb/tdb.component';
import { ImprimerCertificatComponent } from './components/imprimer-certificat/imprimer-certificat.component';
import { DossierProspectComponent } from './components/dossier-prospect/dossier-prospect.component';
import { AfficherDossierComponent } from './components/afficher-dossier/afficher-dossier.component';
import { ImprimerBrouillardComponent } from './components/imprimer-brouillard/imprimer-brouillard.component';
import { ImprimerDepenseComponent } from './components/imprimer-depense/imprimer-depense.component';
import { ClientComponent } from './components/client/client.component';
import { AjouterClientExploitationsComponent } from './components/ajouter-client-exploitations/ajouter-client-exploitations.component';
import { AjouterDocVentesComponent } from './components/ajouter-doc-ventes/ajouter-doc-ventes.component';
import { DocumentVentsComponent } from './components/document-vents/document-vents.component';
import { DocumentAchatComponent } from './components/document-achat/document-achat.component';
import { ComplementsClientsComponent } from './components/complements-clients/complements-clients.component';
import { AlertesClientsComponent } from './components/alertes-clients/alertes-clients.component';
import { BondeCommandeVenteComponent } from './components/bonde-commande-vente/bonde-commande-vente.component';
import { ContactsClientComponent } from './components/contacts-client/contacts-client.component';
import { ModifierDocumentAchatsComponent } from './components/modifier-document-achats/modifier-document-achats.component';
import { RegrouperAchatsComponent } from './components/regrouper-achats/regrouper-achats.component';
import { RegrouperDocVentesComponent } from './components/regrouper-doc-ventes/regrouper-doc-ventes.component';
import { AfficherDocumentAchatsComponent } from './components/afficher-document-achats/afficher-document-achats.component';
import { ModifierClientComponent } from './components/modifier-client/modifier-client.component';
import { BondeComamndeComponent } from './components/bonde-comamnde/bonde-comamnde.component';
import { IdentificationClientComponent } from './components/identification-client/identification-client.component';
import { PrefactureComponent } from './components/prefacture/prefacture.component';
import { FristCallComponent } from './components/frist-call/frist-call.component';
import { AjouterFristCallComponent } from './components/ajouter-frist-call/ajouter-frist-call.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IdentificationComponent,
    GroupesComponent,
    ContactsComponent,
    ParametrageComponent,
    UsersComponent,
    SouchesNomComponent,
    FournisseursComponent,
    AjouterFournisseurComponent,
    ModifierFournisseursComponent,
    AlertesFournisseursComponent,
    ComplementsFournisseurComponent,
    ContratDomTraitmentComponent,
    CaisseComponent,
    BiblioComponent,
    AfficherCaisseComponent,
    DepenseServicesComponent,
    OrdrePaiementComponent,
 
    TdbComponent,
    IdentificationClientComponent,

    FacturesComponent,
    BrouillardCaisseComponent,
    BulletinCaisseComponent,
    BulletinDepenseComponent,
    BordereauVersementEspeceComponent,
    BordereauVersementChequeComponent,
    ImprimerOrdrePaiementComponent,
    AjouterOPComponent,
    CertificatRSComponent,
    ImprimerBrouillardComponent,
    ImprimerDepenseComponent,
    ImprimerCertificatComponent,
    DossierProspectComponent,
    AfficherDossierComponent,
    ClientComponent,
    AjouterClientExploitationsComponent,
    AjouterFournisseurComponent,
    AjouterDocVentesComponent,
    DocumentVentsComponent,
    DocumentAchatComponent,
    ComplementsClientsComponent,
    ComplementsFournisseurComponent,
    AlertesFournisseursComponent,
    AlertesClientsComponent,
    BondeCommandeVenteComponent,
    ContactsClientComponent,
    SouchesNomComponent,
    ModifierDocumentAchatsComponent,
    RegrouperAchatsComponent,
    AfficherDocumentAchatsComponent,
    RegrouperDocVentesComponent,
    ModifierClientComponent,
    BondeComamndeComponent,
    ModifierFournisseursComponent,
    PrefactureComponent,
    FristCallComponent,
    AjouterFristCallComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [], // Ajoutez cette ligne
  bootstrap: [AppComponent],
})
export class AppModule {}
