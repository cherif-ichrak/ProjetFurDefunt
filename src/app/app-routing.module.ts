import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametrageComponent } from './components/parametrage/parametrage.component';
import { ParametragePwdComponent } from './components/parametrage-pwd/parametrage-pwd.component';
import { FournisseursComponent } from './components/fournisseurs/fournisseurs.component';
import { AjouterFournisseurComponent } from './components/ajouter-fournisseur/ajouter-fournisseur.component';
import { ModifierFournisseursComponent } from './components/modifier-fournisseurs/modifier-fournisseurs.component';
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
import { ImprimerDepenseComponent } from './components/imprimer-depense/imprimer-depense.component';
import { ImprimerCaissComponent } from './components/imprimer-caiss/imprimer-caiss.component';
import { ClientComponent } from './components/client/client.component';
import { DocumentAchatComponent } from './components/document-achat/document-achat.component';
import { DocumentVentsComponent } from './components/document-vents/document-vents.component';
import { AjouterDocumentAchatComponent } from './components/ajouter-document-achat/ajouter-document-achat.component';
import { ModifierDocumentAchatsComponent } from './components/modifier-document-achats/modifier-document-achats.component';
import { AfficherDocumentAchatsComponent } from './components/afficher-document-achats/afficher-document-achats.component';
import { RegrouperAchatsComponent } from './components/regrouper-achats/regrouper-achats.component';
import { RegrouperDocVentesComponent } from './components/regrouper-doc-ventes/regrouper-doc-ventes.component';
import { ModifierDocVenteComponent } from './components/modifier-doc-vente/modifier-doc-vente.component';
import { AjouterDocVentesComponent } from './components/ajouter-doc-ventes/ajouter-doc-ventes.component';
import { AjouterClientExploitationsComponent } from './components/ajouter-client-exploitations/ajouter-client-exploitations.component';
import { PrefactureComponent } from './components/prefacture/prefacture.component';
import { FristCallComponent } from './components/frist-call/frist-call.component';
import { AjouterFristCallComponent } from './components/ajouter-frist-call/ajouter-frist-call.component';
const routes: Routes = [
  { path: 'Parametrage', component: ParametrageComponent },
  { path: 'ParametragePwd', component: ParametragePwdComponent },
  { path: 'Tdb', component: TdbComponent },
  { path: 'Dossiers', component: DossierProspectComponent },
  { path: 'Dossiers/AfficherDossier', component: AfficherDossierComponent },
  {
    path: 'Dossiers/AfficherDossier/ImprimerDepense',
    component: ImprimerDepenseComponent,
  },
  {
    path: 'Dossiers/AfficherDossier/BulletinCaisse',
    component: ImprimerCaissComponent,
  },

  {
    path: 'Dossiers/AfficherDossier/ImprimerFacture',
    component: PrefactureComponent,
  },
  { path: 'Caisse', component: CaisseComponent },
  { path: 'DepenseServices', component: DepenseServicesComponent },
  { path: 'Fournisseurs', component: FournisseursComponent },
  { path: 'Client', component: ClientComponent },
  { path: 'DocAchats', component: DocumentAchatComponent },
  { path: 'DocVentes', component: DocumentVentsComponent },

  { path: 'DocAchats', component: DocumentAchatComponent },
  { path: 'DocAchats/AjouterDoc', component: AjouterDocumentAchatComponent },
  { path: 'DocAchats/ModifierDoc', component: ModifierDocumentAchatsComponent },
  {
    path: 'DocAchats/ModifierDoc/AfficherDocAchats',
    component: AfficherDocumentAchatsComponent,
  },

  { path: 'DocAchats/Regrouper', component: RegrouperAchatsComponent },
  {
    path: 'DocAchats/Regrouper/AfficherDocAchats',
    component: AfficherDocumentAchatsComponent,
  },
  {
    path: 'DocAchats/AjouterDoc/AfficherDocAchats',
    component: AfficherDocumentAchatsComponent,
  },

  { path: 'DocVentes', component: DocumentVentsComponent },
  { path: 'DocVentes/Regrouper', component: RegrouperDocVentesComponent },
  {
    path: 'DocVentes/Regrouper/AfficherDocAchats',
    component: AfficherDocumentAchatsComponent,
  },

  { path: 'DocVentes/ModifierVente', component: ModifierDocVenteComponent },
  {
    path: 'DocVentes/ModifierVente/AfficherDocVente',
    component: AfficherDocumentAchatsComponent,
  },

  { path: 'DocVentes/AjouterDocVente', component: AjouterDocVentesComponent },
  {
    path: 'DocVentes/AjouterDocVente/AfficherDocVente',
    component: AfficherDocumentAchatsComponent,
  },

  {
    path: 'Client/AjouterClient',
    component: AjouterClientExploitationsComponent,
  },
  {
    path: 'Client/ModifierClient',
    component: AjouterClientExploitationsComponent,
  },
  {
    path: 'Fournisseurs/Ajouterfournisseur',
    component: AjouterFournisseurComponent,
  },
  {
    path: 'Fournisseurs/ModifierFournisseur',
    component: ModifierFournisseursComponent,
  },
  { path: 'OrdrePaiement', component: OrdrePaiementComponent },
  { path: 'OrdrePaiement/AjouterOp', component: AjouterOPComponent },
  { path: 'FirstCall', component: FristCallComponent },
  { path: 'FirstCall/AjouterFirstCall', component: AjouterFristCallComponent },
  
  {
    path: 'OrdrePaiement/OrderPaiement',
    component: ImprimerOrdrePaiementComponent,
  },


  { path: 'Factures', component: FacturesComponent },
  { path: 'Certificat', component: CertificatRSComponent },
  {
    path: 'Certificat/ImprimerCertificat',
    component: ImprimerCertificatComponent,
  },

  { path: 'Documents', component: BiblioComponent },

  { path: 'ContratMain', component: ContratDomTraitmentComponent },
  { path: 'Caisse/AfficherCaisee', component: AfficherCaisseComponent },
  {
    path: 'Caisse/AfficherCaisee/ImprimerBrouillard',
    component: BrouillardCaisseComponent,
  },
  {
    path: 'Caisse/AfficherCaisee/BulletinCaisse',
    component: BulletinCaisseComponent,
  },
  {
    path: 'Caisse/AfficherCaisee/BulletinDepense',
    component: BulletinDepenseComponent,
  },
  {
    path: 'Caisse/AfficherCaisee/ImprimerVersementEspece',
    component: BordereauVersementEspeceComponent,
  },
  {
    path: 'Caisse/AfficherCaisee/ImprimerVersementCheque',
    component: BordereauVersementChequeComponent,
  },
  { path: 'Fournisseurs/Ajouter', component: AjouterFournisseurComponent },
  { path: 'Fournisseurs/Modifier', component: ModifierFournisseursComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
