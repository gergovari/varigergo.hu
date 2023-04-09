---
title: "Témák"
weight: 13
---
# Mely témák foglalkoztatnak téged?
{{< columns vcentered=True >}}
    {{< column >}}
        {{< questionnaire/group >}}
            <h2>Információáramlás</h2>
            {{< questionnaire/checkbox "topic" "Hírek, álhírek" "info-news" >}}
            {{< questionnaire/checkbox "topic" "Technológiák, módszerek, eszközök" "info-tech" >}}
            {{< questionnaire/checkbox "topic" "Egészségügyi, kutatási adatkezelés" "info-medical" >}}
            {{< questionnaire/checkbox "topic" "Oktatás, tanulás az online térben" "info-study" >}}
            {{< questionnaire/checkbox "topic" "Kulturális, gazdasági, társadalmi hatások" "info-culture" >}}
        {{< /questionnaire/group >}}
    {{< /column >}}
    {{< column >}}
        {{< questionnaire/group >}}
            <h2>Digitális nomád</h2>
            {{< questionnaire/checkbox "topic" "Tessék?" "nomad-basics" >}}
            {{< questionnaire/checkbox "topic" "Online munkavállalás" "nomad-work" >}}
            {{< questionnaire/checkbox "topic" "Online vállalkozás" "nomad-business" >}}
            {{< questionnaire/checkbox "topic" "Online pénzügyek" "nomad-finance" >}}
            {{< questionnaire/checkbox "topic" "Életmód, utazás, kihívások" "nomad-life" >}}
            {{< questionnaire/checkbox "topic" "Legalitás, adózás" "nomad-legal" >}}
        {{< /questionnaire/group >}}
    {{< /column >}}
{{< /columns >}}
# Van még olyan téma amivel problémád van és szeretnél többet tanulni róla?
{{< questionnaire/textarea id="wishes" placeholder="A kívánságaid..." >}}
