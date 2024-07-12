//init modal contents
const contentExist = `
  <!-- contentExist -->
    <!-- modal header -->
    <div class="modal-header border-0 p-2 " >
        <div class="Custom-modal-img-bg w-100 h-100 p-2 rounded-1">
            <h6 class="text-start m-0"><strong>Password required</strong></h6>
        </div>
    </div>
    <!-- modal body -->
    <div class="modal-body">
        <p class="fst-italic" style="font-size: 15.5px;">This site (this URL) is already occupied. If this is your site enter the password, or you can try using <a href="/" class="text-white">different site</a>.</p>
        <div>
            <label for="password-input" class="col-10" style="font-size: 13px;">
                <strong>Password used to encrypt this site:</strong>
            </label>
            <input type="password" class="col-10">
        </div>
    </div>
    <!-- modal footer -->
    <div class="modal-footer border-0">
        <button type="button" class="btn btn-light">
            <strong class="text-black">Decrypt this site</strong>
        </button>
    </div>
`;

const contentNew = `
  <!-- contentNew -->
    <!-- modal header -->
    <div class="modal-header border-0 p-2 " >
        <div class="Custom-modal-img-bg w-100 h-100 p-2 rounded-1">
            <h6 class="text-start m-0"><strong>Create new site?</strong></h6>
        </div>
    </div>
    <!-- modal body -->
    <div class="modal-body">
        <p class="" style="font-size: 15.5px;">Great! This site doesn't exist, it can be yours! Would you like to create:</p>
        <h5 class="text-center">${currentURL}</h5>
    </div>
    <!-- modal footer -->
    <div class="modal-footer border-0">
        <button type="button" class="btn btn-light">
            <strong class="text-black"  data-bs-dismiss="modal">Create site</strong>
        </button>
        <a href="/" class="btn btn-light">
            <strong class="text-black">Cancel</strong>
        </a>
    </div>
`;

//init modal content setter
const myModalContent = document.getElementById("myModal-content");
console.log(init_modal_state);
if (init_modal_state === "exist") {
    console.log("working exits");
    myModalContent.innerHTML = contentExist;
} else if (init_modal_state === "new") {
    console.log("working new");
    myModalContent.innerHTML = contentNew;
};


//script for triggering the inital modal
const initModal = document.getElementById('myModal')
document.addEventListener('DOMContentLoaded', function() {
    const myModal = new bootstrap.Modal(initModal);
    myModal.show();
});