"use strict"

var ToggleTableRow = function () {
    var table
    var first_column
    var second_column
    var employees_container
    var list
    var cross

    var initToggleTableRow = function () {
        table.querySelectorAll('td')
            .forEach(e => e.addEventListener("click", function () {
                changeColumnOnClick()
                console.log("clicked")
            }));
        cross.addEventListener("click", returnToOriginal)
    }

    var changeColumnOnClick = function () {
        first_column.classList.remove('col-lg-12')
        first_column.classList.remove('col-sm-12')
        first_column.classList.add('col-lg-3')
        first_column.classList.add('col-sm-3')

        addClassToChildren(employees_container, 'opacity-0')


        second_column.classList.remove('fadeHidden')
        second_column.classList.add('fadeVisible')
        list.classList.remove('fadeHidden')
        list.classList.add('fadeVisible')
        setTimeout(() => {
            list.classList.remove('d-none')
            employees_container.classList.add('d-none')
            // second_column.classList.remove('d-none')

        }, 750)
    }

    var returnToOriginal = function () {
        console.log('return')
        first_column.classList.remove('col-lg-3')
        first_column.classList.remove('col-sm-3')
        first_column.classList.add('col-lg-12')
        first_column.classList.add('col-sm-12')

        addClassToChildren(employees_container, 'opacity-100')
        removeClassFromChildren(employees_container, 'opacity-0')
        second_column.classList.remove('fadeVisible')
        second_column.classList.add('fadeHidden')
        list.classList.remove('fadeVisible')
        list.classList.add('fadeHidden')
        setTimeout(() => {
            list.classList.add('d-none')
            employees_container.classList.remove('d-none')
            // second_column.classList.remove('d-none')

        }, 750)
    }

    var addClassToChildren = (element, _class) => {
        Object.values(element.children).forEach((e) => {
            e.classList.add(_class);
        });
    };

    var removeClassFromChildren = (element, _class) => {
        Object.values(element.children).forEach((e) => {
            e.classList.remove(_class);
        });
    };

    return {
        init: function () {
            table = document.getElementById('kt_customers_table');
            first_column = document.getElementById('first_column')
            second_column = document.getElementById('second_column')
            employees_container = document.getElementById('employees_container')
            list = document.getElementById('employees')
            cross = document.getElementById('cancel_detail')
            initToggleTableRow();
        }
    }
}

// KTUtil.onDOMContentLoaded(function () {
//     ToggleTableRow.init()
// });