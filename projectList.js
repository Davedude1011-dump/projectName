var ProjectsList = [
    {Name: "Equation of a line ⚠️", Subject: "Maths", CreationDate: "18/05/2023", Link: "equation-of-a-line/index.html"},
    {Name: "Cell Organelles", Subject: "Biology", CreationDate: "18/05/2023", Link: "cell-structure/index.html"},
]

const ProjectShell = document.querySelector(".project-list-outer")
const SearchBar = document.querySelector(".search-bar")

function SetListAll() {
    for (let i = 0; i < ProjectsList.length; i++) {
        var ContentSplitter = document.createElement("div");
        ContentSplitter.classList.add("content-splitter");
        ProjectShell.appendChild(ContentSplitter);

        var ContentShell = document.createElement("div");
        ContentShell.classList.add("content-shell");

        var ContentName = document.createElement("div");
        ContentName.classList.add("content-name");
        ContentName.classList.add("content-text");
        ContentName.textContent = ProjectsList[i].Name
        ContentName.onclick = function() {
            window.open(ProjectsList[i].Link, "_self")
        }
        ContentShell.appendChild(ContentName);

        var ContentSubject = document.createElement("div");
        ContentSubject.classList.add("content-subject");
        ContentSubject.classList.add("content-text");
        ContentSubject.textContent = ProjectsList[i].Subject
        ContentShell.append(ContentSubject);

        var ContentCreationDate = document.createElement("div");
        ContentCreationDate.classList.add("content-creation-date");
        ContentCreationDate.classList.add("content-text");
        ContentCreationDate.textContent = ProjectsList[i].CreationDate
        ContentShell.appendChild(ContentCreationDate)

        ProjectShell.appendChild(ContentShell);
    }
}

function searchLists() {
    var searchValue = SearchBar.value.toLowerCase();

    ProjectShell.innerHTML = ""; // Clear previous list

    for (let i = 0; i < ProjectsList.length; i++) {
        var subject = ProjectsList[i].Subject.toLowerCase();
        var name = ProjectsList[i].Name.toLowerCase();
        var creationDate = ProjectsList[i].CreationDate.toLowerCase();

        if (subject.includes(searchValue) || name.includes(searchValue) || creationDate.includes(searchValue)) {
            var ContentSplitter = document.createElement("div");
            ContentSplitter.classList.add("content-splitter");
            ProjectShell.appendChild(ContentSplitter);

            var ContentShell = document.createElement("div");
            ContentShell.classList.add("content-shell");

            var ContentName = document.createElement("div");
            ContentName.classList.add("content-name");
            ContentName.classList.add("content-text");
            ContentName.textContent = ProjectsList[i].Name;
            ContentName.onclick = function() {
                window.open(ProjectsList[i].Link, "_self");
            };
            ContentShell.appendChild(ContentName);

            var ContentSubject = document.createElement("div");
            ContentSubject.classList.add("content-subject");
            ContentSubject.classList.add("content-text");
            ContentSubject.textContent = ProjectsList[i].Subject;
            ContentShell.append(ContentSubject);

            var ContentCreationDate = document.createElement("div");
            ContentCreationDate.classList.add("content-creation-date");
            ContentCreationDate.classList.add("content-text");
            ContentCreationDate.textContent = ProjectsList[i].CreationDate;
            ContentShell.appendChild(ContentCreationDate);

            ProjectShell.appendChild(ContentShell);
        }
    }
}
SearchBar.addEventListener("input", searchLists);

SetListAll()