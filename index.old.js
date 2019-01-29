/*
var prefabblocks = ["using System;",
"static void Main(string[] args)",
"{", "}", "namespace MyConsoleApp1",
"class Program",
"Console.ReadLine();"]


function AddCustomBlock(blocktext){
  if (blocktext == "") {
    return;
  }
  console.log(blocktext);
  document.getElementById("NewBlock").value = "";
  document.getElementById("DragList").innerHTML += '<li class="dragable" draggable="true"><input type="text" class="dragableTextbox" value='+"'"+blocktext+"'></li>";
  RefreshDrags();
}
function AddCustomPrefab(blocktext){
  if (blocktext == "") {
    return;
  }
  console.log(blocktext);
  document.getElementById("NewPrefab").value = "";
  document.getElementById("PrefabList").innerHTML += '<li class="prefabs" onclick="AddPrefabBlock(this);">'+blocktext+'</li>';
}
function AddPrefabBlock(BlockObject){
  document.getElementById("DragList").innerHTML += '<li class="dragable" draggable="true"><input type="text" class="dragableTextbox" value="'+BlockObject.innerText+'"></li>'
  RefreshDrags();
}
function advancedview(){
  var checkbox = document.getElementById("AdvancedViewCB");
  if (checkbox.checked) {
    console.log("Checked");
    EnableAdvancedView();
  }
  else if (!checkbox.checked) {
    console.log("Not checked");
    DisableAdvancedView();
  }
}
function EnableAdvancedView(){

}
function DisableAdvancedView(){

}
function ClearCustomTable(){
  var CustomBlocks = document.getElementsByClassName("dragable");
  while (CustomBlocks[0] != undefined) {
    CustomBlocks[0].remove();
  }
}
function ChangeFilename(){

}
function AddPredefinedPrefabList(){
  var i = 0;
  while (i < prefabblocks.length) {
    AddCustomPrefab(prefabblocks[i]);
    i += 1;
  }
}
function AddBasicBlocksTemplate(){
  var i = 0;
  var BlockList = ["using System;","using System.Collections.Generic;","using System.Linq;","using System.Text;","namespace MyConsoleApp1","{","class Program", "{", "static void Main(string[] args)","{",'Console.WriteLine("Hello world");',"Console.ReadLine();","}", "}", "}"];
  while (i < BlockList.length) {
    AddCustomBlock(BlockList[i]);
    i += 1;
  }
}
function GenerateCsharpfile(){
  var filename = document.getElementById("FilenameInput");
  var LinesOfCode = document.getElementsByClassName("dragable");
  var CodeSource = "";
  if (filename.value != "") {
    var i = 0;
    while (i < LinesOfCode.length) {
      if (LinesOfCode[i].innerText != "") {
        CodeSource += LinesOfCode[i].innerText + "\n";
      }
      else if (LinesOfCode[i].innerText == "") {
        CodeSource += LinesOfCode[i].lastChild.value + "\n";
      }
      i+=1;
    }
    download(document.getElementById("FilenameInput").value, CodeSource)
  }
}
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}



var dragSrcEl = null;

function handleDragStart(e) {
   // Target (this) element is the source node.
   this.style.opacity = '0.4';

   dragSrcEl = this;

   e.dataTransfer.effectAllowed = 'move';
   e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
   if (e.preventDefault) {
       e.preventDefault(); // Necessary. Allows us to drop.
   }

   e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

   return false;
}

function handleDragEnter(e) {
   // this / e.target is the current hover target.
   this.classList.add('over');
}

function handleDragLeave(e) {
   this.classList.remove('over');  // this / e.target is previous target element.
   this.style.opacity = '1';
}

function handleDrop(e) {
   // this/e.target is current target element.

   if (e.stopPropagation) {
       e.stopPropagation(); // Stops some browsers from redirecting.
   }

   // Don't do anything if dropping the same column we're dragging.
   if (dragSrcEl != this) {
       // Set the source column's HTML to the HTML of the column we dropped on.
       dragSrcEl.innerHTML = this.innerHTML;
       this.innerHTML = e.dataTransfer.getData('text/html');
   }

   return false;
}

function handleDragEnd(e) {
   // this/e.target is the source node.

   [].forEach.call(cols, function (col) {
       col.classList.remove('over');
   });
}

function RefreshDrags(){
  var cols = document.querySelectorAll('#DragList .dragable');

  [].forEach.call(cols, function (col) {
     col.addEventListener('dragstart', handleDragStart, false);
     col.addEventListener('dragenter', handleDragEnter, false)
     col.addEventListener('dragover', handleDragOver, false);
     col.addEventListener('dragleave', handleDragLeave, false);
     col.addEventListener('drop', handleDrop, false);
     col.addEventListener('dragend', handleDragEnd, false);
  });
}
//var cols = document.querySelectorAll('#DragList .dragable');
var cols = document.querySelectorAll('#DragList .dragable');

[].forEach.call(cols, function (col) {
   col.addEventListener('dragstart', handleDragStart, false);
   col.addEventListener('dragenter', handleDragEnter, false)
   col.addEventListener('dragover', handleDragOver, false);
   col.addEventListener('dragleave', handleDragLeave, false);
   col.addEventListener('drop', handleDrop, false);
   col.addEventListener('dragend', handleDragEnd, false);
});

AddPredefinedPrefabList();
AddBasicBlocksTemplate();
*/