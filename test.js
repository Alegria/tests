<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "EventReservation",
  "underName": {
    "@type": "Person",
    "name": "{{Model.Patient.FullName}}"
  },
  "reservationFor": {
    "@type": "Event",
    "name": "Appointment with {{Model.Professional.FullName}}",
"startDate": "2015-06-30T19:30:00-08:00",
   // "startDate": "{{Model.ApptTime:yyyy-MM-dTH:mm:sszzz}}",
"image":"{{Model.Location.GoogleMapUrlPrefix}}258x198&scale=2",
    "location": {
      "@type": "Place",
      "name": "{{Model.Practice.Name}}",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "{{Model.Location.Address1}}, {{Model.Location.Address2}} {{Model.Location.Address3}}",
        "addressLocality": "{{Model.Location.City}}",
        "addressRegion": "{{Model.Location.State}}",
        "postalCode": "{{Model.Location.Zip}}",
        "addressCountry": "US"
      }
    }
  },
 "potentialAction": {
    "@type": "ViewAction",
    "target": "https://www.zocdoc.com/reminders/response?linkguid={{Envelope.LinkGuid}}&response=5",
    "name": "Create account"
  }
}
</script>