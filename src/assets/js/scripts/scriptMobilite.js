document.addEventListener("DOMContentLoaded", function () {
  const selectForm = document.getElementById("selectForm");
  const formContainer = document.getElementById("formContainer");

  // Événement pour détecter les changements dans le menu déroulant
  selectForm.addEventListener("change", function () {
    const selectedForm = selectForm.value;

    // Effacer le contenu du conteneur du formulaire
    formContainer.innerHTML = "";
    // Ajouter le formulaire correspondant au choix
    if (selectedForm === "form1") {
      formContainer.innerHTML = `
<form class="form-horizontal">
                            <div class="form-row">
                              <div class="col-md-4">
                              <label>Matricule</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="validationDefault04"
                                  placeholder="Matricule"
                                />
                              </div>
                              <div class="col-md-4">
                               <label>Nom Chauffure</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="validationDefault04"
                                  placeholder="Nom Chauffure"
                                />
                              </div>
                              <div class="col-md-4">
                              <label>N° Tel Chauffure</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="validationDefault04"
                                  placeholder="N° Tel Chauffure"
                                />
                              </div>
                              </div>
                               <div class="form-row">
                                 <div class="col-md-6">
                                   <label>Point Départ</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="validationDefault04"
                                  placeholder="Point Départ"
                                />
                                 </div>
                                 <div class="col-md-6">
                                  <label>Point Arriveé</label>

                                <input
                                  type="text"
                                  class="form-control"
                                  id="validationDefault04"
                                  placeholder="Point Arriveé"
                                />
                                 </div>
                             
                            </div>
                          </form>
        
      `;
    } else if (selectedForm === "form2") {
      formContainer.innerHTML = `
<form class="form-horizontal">
                            <div class="form-row">
                              <div class="col-md-4">
                              <label>Matricule</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="validationDefault04"
                                  placeholder="Matricule"
                                />
                              </div>
                              <div class="col-md-4">
                               <label>Nom Chauffure</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="validationDefault04"
                                  placeholder="Nom Chauffure"
                                />
                              </div>
                              <div class="col-md-4">
                              <label>N° Tel Chauffure</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="validationDefault04"
                                  placeholder="N° Tel Chauffure"
                                />
                              </div>
                              </div>
                               <div class="form-row">
                                 <div class="col-md-6">
                                   <label>Point Départ</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="validationDefault04"
                                  placeholder="Point Départ"
                                />
                                 </div>
                                 <div class="col-md-6">
                                  <label>Point Arriveé</label>

                                <input
                                  type="text"
                                  class="form-control"
                                  id="validationDefault04"
                                  placeholder="Point Arriveé"
                                />
                                 </div>
                             
                            </div>
                          </form>
   
     
      `;
    } else if (selectedForm === "form3") {
      formContainer.innerHTML = `
<form >
                            <div class="form-row">
                              <div class="col-md-4">
                              <label>Matricule</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="validationDefault04"
                                  placeholder="Matricule"
                                />
                              </div>
                              <div class="col-md-4">
                               <label>Nom Chauffure</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="validationDefault04"
                                  placeholder="Nom Chauffure"
                                />
                              </div>
                              <div class="col-md-4">
                              <label>N° Tel Chauffure</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="validationDefault04"
                                  placeholder="N° Tel Chauffure"
                                />
                              </div>
                              </div>
                               <div class="form-row">
                                 <div class="col-md-6">
                                   <label>Point Départ</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="validationDefault04"
                                  placeholder="Point Départ"
                                />
                                 </div>
                                 <div class="col-md-6">
                                  <label>Point Arriveé</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="validationDefault04"
                                  placeholder="Point Arriveé"
                                />
                                 </div>
                            </div>
                          </form>

     
      `;
    } else if (selectedForm === "form4") {
      formContainer.innerHTML = `
 <form >
                            <div class="form-row">
                              <div class="col-md-4">
                              <label>Matricule</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="validationDefault04"
                                  placeholder="Matricule"
                                />
                              </div>
                              <div class="col-md-4">
                                   <label>Point Départ</label>

                                <input
                                  type="text"
                                  class="form-control"
                                  id="validationDefault04"
                                  placeholder="Point Départ"
                                />
                                 </div>
                                 <div class="col-md-4">
                                  <label>Point Arriveé</label>

                                <input
                                  type="text"
                                  class="form-control"
                                  id="validationDefault04"
                                  placeholder="Point Arriveé"
                                />
                                 </div>
                              
                            </div>
                          </form>
      `;
    } else if (selectedForm === "form5") {
      formContainer.innerHTML = `

       <form >
                            <div class="form-row">
                              <div class="col-md-4">
                              <label>N° Vol</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="validationDefault04"
                                  placeholder="N° Vol"
                                />
                              </div>
                              <div class="col-md-4">
                              <label>Compagne</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="validationDefault04"
                                  placeholder="Compagne"
                                />
                              </div>
                              <div class="col-md-4">
                              <label>Date Départ</label>
                                <input
                                  type="date"
                                  class="form-control"
                                  id="validationDefault04"
                                  value="Date Départ"
                                />
                              </div>
                                 
                            </div>
                              <div class="form-row">
                              <div class="col-md-4">
                                 <label>Heure Départ</label>
                                <input
                                  type="time"
                                  class="form-control"
                                  id="validationDefault04"
                                  value="Heure Départ"
                                />
                              </div>
                              <div class="col-md-4">
                                 <label>Point Départ</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="validationDefault04"
                                  placeholder="Point Départ"
                                />
                                 </div>
                                 <div class="col-md-4">
                                  <label>Point Arriveé</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="validationDefault04"
                                  placeholder="Point Arriveé"
                                />
                                 </div>
                              </div>
                           
                          </form>
    
      
      `;
    }
  });
});
