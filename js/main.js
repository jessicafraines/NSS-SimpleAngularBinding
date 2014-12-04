;(function(){
  'use strict';

  angular.module('todoApp', [])
  .controller('TodoController', function(){
    var vm = this;
    vm.tasks = [
      {
        name: 'Learn Angular',
        desc: 'If I could learn Angular I\'d be sooo happy',
        due:  'Today'
      },
      {
        name: 'Finish Tic Tac Toe',
        desc: 'If I could finish Tic Tac Toe I\'d be sooo happy',
        due:  'Monday'
      },
      {
        name: 'Get a job',
        desc: 'If I could get a job I\'d be sooo happy',
        due:  'Tuesday'
      }
    ];

    vm.addNewTask = function(){
      vm.tasks.push(vm.newTask);
      vm.newTask = null;
    };

    vm.deleteTask = function(task){
      var index = vm.tasks.indexOf(task);
      vm.tasks.splice(index, 1);
    };
  });

}());
