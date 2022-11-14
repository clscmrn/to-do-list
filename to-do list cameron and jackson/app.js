// Code acquired from GitHub

var toDoList = {
    inputTag: document.getElementById("input"),
    ul: document.getElementById("list"),
    addButton: document.getElementById("addButton"),   
    showHideButton: document.getElementById("showHide"),
    init: function() {
        toDoList.addButton.addEventListener('click', toDoList.addTask);
        toDoList.inputTag.addEventListener('keypress', toDoList.keyPress);
        toDoList.showHideButton.addEventListener('click', toDoList.showHide);
    },
    addTask: function() {
        if ( toDoList.inputTag.value != "" ) {
            let inputValue = toDoList.inputTag.value;
            const li = document.createElement("li");
            const removeButton = document.createElement("button");
            removeButton.setAttribute("class", "remove");
            const checkBox = document.createElement("input");
            checkBox.setAttribute("type", "checkbox");
            checkBox.setAttribute("class", "checkbox");
            checkBox.innerHTML = "Remove";
            checkBox.addEventListener("click", toDoList.checked);
            li.innerHTML = inputValue;
            removeButton.innerHTML = "Remove";
            li.appendChild(checkBox);
            li.appendChild(removeButton);
            toDoList.ul.appendChild(li);
            removeButton.onclick = toDoList.removeTask;
            toDoList.inputTag.value = "";
        }
    },
    checked: function() {
        if (this.parentNode.style.backgroundColor !== "mediumspringgreen") {
            this.parentNode.style.backgroundColor = "mediumspringgreen";
            this.parentNode.style.color = "black";
        } else {
            this.parentNode.style.backgroundColor = "black";
            this.parentNode.style.color = "white";
            checkedSound()
        }
    },
    keyPress: function(e) {
        if ( e.key === "Enter") {
            e.preventDefault();
            toDoList.addButton.click();
        }
    },
    removeTask: function() {
        this.parentNode.remove();
        play();
    },
    showHide: function() {
        if ( toDoList.ul.style.display == "none" ) {
            toDoList.ul.style.display = "block";
            toDoList.showHideButton.innerHTML = "Hide List";
        } else {
            toDoList.ul.style.display = "none";
            toDoList.showHideButton.innerHTML = "Show List";
        }
    }
}

window.onload = toDoList.init;

// Random Photo Code acquired from Coding With Hammad on YouTube
function pic() {

	var bgm= ['https://cdn.pixabay.com/photo/2015/01/28/23/35/hills-615429_960_720.jpg','https://cdn.pixabay.com/photo/2017/07/24/12/43/schrecksee-2534484__340.jpg','https://cdn.pixabay.com/photo/2018/02/02/17/29/nature-3125912__340.jpg','https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg','https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080__340.jpg','https://cdn.pixabay.com/photo/2016/10/18/21/28/seljalandsfoss-1751463__340.jpg','https://cdn.pixabay.com/photo/2016/05/02/10/13/ship-1366926__340.jpg','https://cdn.pixabay.com/photo/2015/01/28/23/34/mountains-615428__340.jpg','https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg','https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052_960_720.jpg','https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg','https://cdn.pixabay.com/photo/2018/08/24/23/33/field-3629120__340.jpg','https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292__340.jpg'];

$('.random_bg').css({
	'background':'url('+ bgm[Math.floor(Math.random()* bgm.length )]+')no-repeat',
	'background-position': '100% ',
	'background-size':'cover'
});

}
 pic();

  function pic() {
             var bgm = ['https://images.unsplash.com/photo-1553787762-b5f5721f3270?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
             'https://images.unsplash.com/photo-1553785063-9e892a3f15b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
             'https://images.unsplash.com/photo-1553773077-91673524aafa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
             'https://images.unsplash.com/photo-1554088559-b9c59b87915a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
             'https://images.unsplash.com/photo-1553696590-4b3f68898333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
             'https://images.unsplash.com/photo-1553702446-a39d6fbee6cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
             'https://images.unsplash.com/photo-1553649033-3fbc8d0fa3cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
             'https://images.unsplash.com/photo-1553969420-fb915228af51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
             'https://images.unsplash.com/photo-1553880376-2dec478c8e3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
             'https://images.unsplash.com/photo-1554147090-e1221a04a025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80',
             'https://images.unsplash.com/photo-1554128243-4e0615b848e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1628&q=80',
             'https://images.unsplash.com/photo-1555298305-f64672c34821?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
             'https://images.unsplash.com/photo-1554502785-b8b0724b4cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'];
     $('.random_bg').css({
         'background' :'url('+ bgm[Math.floor(Math.random() * bgm.length)] + ') no-repeat',
         'background-position' : '100%',
         'background-size' : 'cover',
         
     });
 }
// Random quote algorithm acquired from Stack Overflow
 (function newQuote() {
    var quotes = [
        '\“The best way to predict your future is to create it.\” - Abraham Lincoln',
        '\“Do what you can, with what you have, where you are.\” - Theodore Roosevelt',
        '\“Nothing succeeds like success. Get a little success, and then just get a little more.\” - Maya Angelou', 
        '\“It has been my observation that most people get ahead during the time that others waste.\” - Henry Ford', 
        '\“The difference between what we do and what we are capable of doing would suffice to solve most of the world\'s problems.\” - Mahatma Gandhi', 
        '\“You cannot change your destination overnight, but you can change your direction overnight.\” - Jim Rohn', 
        '\“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.\” - Steve Jobs', 
        '\“I wouldn\’t be where I am now if I didn\’t fail … a lot. The good, the bad, it\’s all part of the success equation.\” - Mark Cuban', 
        '\““I just love it when people say I can\'t do it; there\'s nothing that makes me feel better because all my life, people have said that I wasn\'t going to make it.\” - Ted Turner', 
        '\“If you can\’t tolerate critics, don\’t do anything new or interesting.\” - Jeff Bezos', 
        '\““You don\'t make progress by standing on the sidelines, whimpering, and complaining. You make progress by implementing ideas.\” - Shirley Chisholm', 
        '\“I really don\’t think life is about the I-could-have-beens. Life is only about the I-tried-to-do. I don\’t mind the failure, but I can\’t imagine that I\’d forgive myself if I didn\’t try.\” - Nikki Giovanni', 
        '\“If you hear a voice within you, say, \'You cannot paint,\' then by all means, paint, and that voice will be silenced.\” - Vincent Van Gogh', 
        '\“Someday is a disease that will take your dreams to the grave with you. Pro and con lists are just as bad. If it\’s important to you and you want to do it \'eventually,\' just do it and correct course along the way.\” - Tim Ferriss', 
        '\“The most important thing about art is to work. Nothing else matters except sitting down every day and trying.\” - Steven Pressfield', 
        '\“Successful people do what unsuccessful people are not willing to do — even when it doesn\’t look like it makes any difference. And they do it long enough for the compounding effect to start to kick in.\” - Jeff Olson', 

    ];
    var randomQuote = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomQuote];
  })();

  function play() {
    var audio = new Audio('sounds/crumple.mp3');
    audio.play();
  }

  function checkedSound() {
    var audio = new Audio('sounds/laugh.mp3');
    audio.checkedSound();
  }