/*functionality related scripts*/

//adding event listner for 0th Tab
let textArea = document.getElementById(`TabContent0`);
let tabTitleSpan = document.getElementById(`tab-title-0`);
textArea.addEventListener("input", function() {
    var textAreaText = textArea.value.replace(/\n|\r|\t|\v|\b|\f/g, '');
    if(textAreaText.length > 0 ){
        tabTitleSpan.innerText = textAreaText.slice(0, 11);
    } else {
        tabTitleSpan.innerText = "Empty Tab";
    }
});

const tabListParent = document.getElementById("TabListParent");
const tabContentParent = document.getElementById("TabContentParent");

var tabCounter = 1;


//New Tab button
function addTab(fillingContent='', tabTitle='Empty Tab') {
    const tabList = tabListParent.querySelectorAll("li");

    /* Tab nav */ 
    const li = document.createElement("li");
    li.setAttribute("id", `tab-nav-${tabCounter}`)
    li.setAttribute("class", "nav-item");
    li.setAttribute("role", "presentation");
    li.innerHTML = `
        <button class="btn nav-link" id="tab-btn-${tabCounter}" data-bs-toggle="tab" data-bs-target="#tab${tabCounter}"
                type="button" role="tab" aria-controls="tab${tabCounter}" aria-selected="true">
            <span id="tab-title-${tabCounter}">${tabTitle}</span> <a class="btn btn-sm btn-close" onclick="closeTab(${tabCounter})"></a>
        </button>
    `
    tabListParent.insertBefore(li, tabList[tabList.length-1]);  // adding <li> to tabList befor '+' icon

    /* Tab content */
    const div = document.createElement("div");
    div.setAttribute("class", "tab-pane fade show");
    div.setAttribute("id", `tab${tabCounter}`);
    div.setAttribute("role", "tabpanel");
    div.setAttribute("aria-labelledby", `tab-${tabCounter}`);
    div.innerHTML = `
        <textarea name="TabContent${tabCounter}" id="TabContent${tabCounter}" class="border border-top-0" placeholder="your text goes here...${tabCounter}">${fillingContent}</textarea>
    `
    tabContentParent.appendChild(div);

    
    //adding event listner
    let textArea = document.getElementById(`TabContent${tabCounter}`);
    let tabTitleSpan = document.getElementById(`tab-title-${tabCounter}`);
    textArea.addEventListener("input", function() {
        var textAreaText = textArea.value.replace(/\n|\r|\t|\v|\b|\f/g, '');
        if(textAreaText.length > 0 ){
            tabTitleSpan.innerText = textAreaText.slice(0, 11);
        } else {
            tabTitleSpan.innerText = "Empty Tab";
        }
    });
    
    //incrementing 'tabCounter'
    tabCounter++;
}

//fall back to prev tab function
function fallBackToFirstTab(){
    const prevTabBtnList = document.querySelectorAll(`.nav-item button`); // collecting all 'tab nav' (new)
    const prevTabBtn = prevTabBtnList[0];
    const tabTrigger = new bootstrap.Tab(prevTabBtn);
    tabTrigger.show();
}

// Close Tab Button 
function closeTab(tabId) {
    const prevTabBtnList = document.querySelectorAll(`.nav-item button`); // collecting all 'tab nav' (old)
    if (prevTabBtnList.length >= 2) {
        /* Tab nav */
        const tabNav = document.getElementById(`tab-nav-${tabId}`);
        tabNav.remove();

        /* Tab content */
        const tabContent = document.getElementById(`tab${tabId}`);
        tabContent.remove();

        /* fall back to prev tab */
        fallBackToFirstTab();
    }
}

// tabs replacing button function if it is exist
function repalceTabs(data) {
    //Collecting tabs
    tabs = data["tabs"];
    //Adding Tabs
    for (let tabIndex = 0; tabIndex < tabs.length; tabIndex++) {
        tab = tabs[tabIndex];
        addTab(tab["text"], tabTitle=tab["text"].slice(0, 11));
    };
    //Removing the existing tab (id=0)
    if (document.getElementById(`tab${0}`)) {
        closeTab(0);
    }
}


//Reload button function
function reloadData(){
    loader('show');
    // Collecting the orginal data from API
    collectDataFromAPI(
        function() {
            // Removing all the old elements
            const tabBtnList = document.querySelectorAll(`.nav-item button`);
            tabBtnList.forEach(btn => {
                btn.remove();
            });
            const tabContentList = document.querySelectorAll(".tab-pane");
            tabContentList.forEach(content => {
                content.remove();
            });
            if (dataFromAPI === "no data") {
                addTab();
                fallBackToFirstTab();
            } else {
                // Replacing it with new fresh elements
                repalceTabs(dataFromAPI);
                // fall back to prev tab
                fallBackToFirstTab();
            };
        }
    );
    //delaying the dismiss
    setTimeout(() => {
        loader('dismiss');
    }, 500);
};

/*BS5.3 Modal related scripts*/

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
        <button type="button" class="btn btn-light" data-bs-dismiss="modal" onclick="repalceTabs(dataFromAPI)">
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
        <button type="button" class="btn btn-light" data-bs-dismiss="modal">
            <strong class="text-black" >Create site</strong>
        </button>
        <a href="/" class="btn btn-light">
            <strong class="text-black">Cancel</strong>
        </a>
    </div>
`;

//init modal content setter
const myModalContent = document.getElementById("myModal-content");
if (init_modal_state === "exist") {
    myModalContent.innerHTML = contentExist;
    collectDataFromAPI();

} else if (init_modal_state === "new") {
    myModalContent.innerHTML = contentNew;
};


//script for triggering the inital modal
const initModal = document.getElementById('myModal')
document.addEventListener('DOMContentLoaded', function() {
    const myModal = new bootstrap.Modal(initModal);
    myModal.show();
});

//Function for triggering the loader modal 
//Allowed 'state' = ['show', 'dismiss']
const loaderModal = new bootstrap.Modal(document.getElementById("loaderModal"));
const loaderModalBtn = document.getElementById("loaderModalBtn");
function loader(state){
    if(state === 'show'){
        loaderModal.show();
    }
    if(state === 'dismiss'){
        loaderModalBtn.click();
        
    }
}

/* API related scripts */

//global veriable
var dataFromAPI;
// Fetching data from the REST API
function collectDataFromAPI(callback){  //callback help to run a function after its execution
    const xhr = new XMLHttpRequest();
    const url = `/api/pages/${currentURL}`;

    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 404) {
                console.log("No data found");
                dataFromAPI = "no data";
                if (callback) callback(dataFromAPI);
            } else if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                dataFromAPI = data;
                if (callback) callback(dataFromAPI);
            } else {
                console.log("Error fetching data: " + xhr.status);
                if (callback) callback(null);
            }
        }
    };
    xhr.send();
}
