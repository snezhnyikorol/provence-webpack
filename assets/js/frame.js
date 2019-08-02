let url_string = window.location.href
let url = new URL(url_string)
let lang = url.searchParams.get("lang")

if (lang == 'eng') {
    $("[for=rc-checkin]").html('Arrival&nbsp;')
}