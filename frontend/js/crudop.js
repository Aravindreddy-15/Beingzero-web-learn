function addRow(obj) {

    var row = `<tr scope="row" class="test-row-${obj._id}">
                   <td>${obj.name}</td>
                   <td id="result-${obj._id}" data-testid="${obj._id}"">${obj.articles}</td>
                   <td>
                     <button class="btn btn-sm btn-danger" data-testid=${obj._id} id="delete-${obj._id}">Delete</button>
                     <button class="btn btn-sm btn-info" disabled data-testid="${obj._id}"  id="save-${obj._id}">Save</button>
                     <button class="btn btn-sm btn-danger hidden" data-testid="${obj._id}"  id="cancel-${obj._id}">Cancel</button>
                     <button class="btn btn-sm btn-primary hidden" data-testid="${obj._id}"  id="confirm-${obj._id}">Confirm</button>
                   </td>
               </tr>`
    $('#tests-table').append(row)

    $(`#delete-${obj._id}`).on('click', deleteTest)
    $(`#cancel-${obj._id}`).on('click', cancelDeletion)
    $(`#confirm-${obj._id}`).on('click', confirmDeletion)
    $(`#save-${obj._id}`).on('click', saveUpdate)
    $(`#result-${obj._id}`).on('click', editResult)

}

function saveUpdate() {
    var testid = $(this).data('testid')

    $.ajax({
        method: "PUT",
        url: `/api/courselib/${testid}`,
        data: {
            articles: $(`#${testid}`).val()
        },
        success: function(Data) {}
    })
    console.log('Saved!')
    var saveBtn = $(`#save-${testid}`)
    var row = $(`.test-row-${testid}`)
    saveBtn.prop('disabled', true)
    row.css('opacity', "0.5")

    setTimeout(function() {
        row.css('opacity', '1')
    }, 2000)


}

function editResult() {
    var testid = $(this).data('testid')
    var value = $(this).html()
    $(this).unbind()
    $(this).html(`<input class="result form-control" data-testid="${testid}" id=${testid} type="text" name="articles" value=${value}>`)


    $(`.result`).on('keyup', function() {
        var testid = $(this).data('testid')
        var saveBtn = $(`#save-${testid}`)
        saveBtn.prop('disabled', false)

    })

}

let getallitems = () => {
    $.ajax({
        method: "GET",
        url: `/api/courselib`,
        success: function(Data) {
            Data = Data.allitems;
            for (let i = 0; i < Data.length; i++) {
                addRow(Data[i]);
            }
        }
    })
}
$("#add-test").click(() => {
    $(".form-wrapper").removeClass("hidden");

})
$('#create-test').click(() => {
    let coursename = $("#test-name").val()
    let articles = $("#test-result").val()
    if (coursename.trim() == "") {
        $("#snackbar").html(`enter course name`);
        showsnackbar();
    } else if (articles.trim() == "") {
        $("#snackbar").html(`enter number of articles`);
        showsnackbar();
    } else {
        $("#test-name").val("");
        $("#test-result").val("")
        $.ajax({
            method: "POST",
            url: `/api/courselib`,
            data: {
                name: coursename,
                articles: articles
            },
            success: function(Data) {
                Data = Data.itemdetails
                addRow(Data);

            }
        })
        $(".form-wrapper").addClass("hidden");
    }


})

function deleteTest() {
    var testid = $(this).data('testid')

    var deleteBtn = $(`#delete-${testid}`)
    var saveBtn = $(`#save-${testid}`)
    var cancelBtn = $(`#cancel-${testid}`)
    var confirmBtn = $(`#confirm-${testid}`)

    deleteBtn.addClass('hidden')
    saveBtn.addClass('hidden')

    cancelBtn.removeClass('hidden')
    confirmBtn.removeClass('hidden')
}

function cancelDeletion() {
    var testid = $(this).data('testid')

    var deleteBtn = $(`#delete-${testid}`)
    var saveBtn = $(`#save-${testid}`)
    var cancelBtn = $(`#cancel-${testid}`)
    var confirmBtn = $(`#confirm-${testid}`)

    deleteBtn.removeClass('hidden')
    saveBtn.removeClass('hidden')

    cancelBtn.addClass('hidden')
    confirmBtn.addClass('hidden')

}

function confirmDeletion() {
    var testid = $(this).data('testid')
    var row = $(`.test-row-${testid}`)
    $.ajax({
        method: "DELETE",
        url: `/api/courselib/${testid}`,

        success: function(Data) {

        }
    })
    row.remove()

}
getallitems()

function showsnackbar() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
}