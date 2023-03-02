let toggle_p = document.querySelector(".toggle-p");

        toggle_p.addEventListener("click", () => {
            let slide = document.querySelector(".nav-fixed");
            slide.classList.toggle("nav-fixed-active");
        });

        let wrap = document.createElement("div");
        wrap.classList.add("wrap-top-data");

        let button = document.createElement("button");
        button.classList.add("button_databale");
        button.innerHTML = `<img src="img/Vector.svg" alt="">`;
        
        wrap.innerHTML = `
                <div class="w-d-t-left">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    </div>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Please select an option</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <button class="btn btn-datatable-2">Enter</button>
                </div>
        `;

        $(document).ready(function() {
            var table = $('#example').DataTable({
                responsive: true,
                columnDefs: [ {
                    orderable: false,
                    // className: 'select-checkbox',
                    targets:   0,
                    'checkboxes': {
                        'selectRow': true
                    }
                } ],
                select: {
                    style:    'os',
                    selector: 'td:first-child'
                },
                "info":     false,
                language: { search: '', searchPlaceholder: "Search Products, brands",
                oPaginate: {
                    sNext: '<i class="fas fa-angle-right curser-icon"></i>',
                    sPrevious: '<i class="fas fa-angle-left curser-icon"></i>'
                }},
            });
                $("#example_wrapper").prepend(wrap)
                $("#example_length").remove();
                $("#example_filter label input").addClass("input_datatable");
                $("#example_filter label").addClass("label_datatable");
                $("#example_filter label").append(button);
                $(".r-sort").removeClass("sorting");
        } );