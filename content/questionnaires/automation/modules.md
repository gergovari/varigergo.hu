---
title: "Témák"
weight: 12
---
# Mely témák foglalkoztatnak téged?
{{< columns vcentered=true >}}
    {{< column >}}
        {{< questionnaire/group >}}
            {{< questionnaire/group >}}
                <h2>Feladatok</h2>
                {{< questionnaire/checkbox "topic" "Alapok" "tasks-basics" >}}
                {{< questionnaire/checkbox "topic" "Mindennapi" "tasks-everyday" >}}
                {{< questionnaire/checkbox "topic" "Irodai" "tasks-office" >}}
                {{< questionnaire/checkbox "topic" "Marketing" "tasks-marketing" >}}
                {{< questionnaire/checkbox "topic" "Pénzügy" "tasks-finance" >}}
                {{< questionnaire/checkbox "topic" "Okos-otthon" "tasks-smarthome" >}}
            {{< /questionnaire/group >}}
        {{< /questionnaire/group >}}
    {{< /column >}}
    {{< column >}}
        {{< questionnaire/group >}}
            {{< questionnaire/group >}}
                <h2>Infrastruktúra</h2>
                {{< questionnaire/checkbox "topic" "Otthoni szolgáltatások" "infra-home" >}}
                {{< questionnaire/checkbox "topic" "Vállalkozásod függetlenítése" "infra-business" >}}
                {{< questionnaire/checkbox "topic" "Centralizáció, decentralizáció" "infra-decentralization" >}}
            {{< /questionnaire/group >}}
        {{< /questionnaire/group >}}
        {{< questionnaire/group >}}
            {{< questionnaire/group >}}
                <h2>Szoftver</h2>
                {{< questionnaire/checkbox "topic" "IFTTT" "software-ifttt" >}}
                {{< questionnaire/checkbox "topic" "Zapier" "software-zapier" >}}
                {{< questionnaire/checkbox "topic" "n8n" "software-n8n" >}}
            {{< /questionnaire/group >}}
        {{< /questionnaire/group >}}
    {{< /column >}}
{{< /columns >}}

# Van még olyan téma amivel problémád van és szeretnél többet tanulni róla?
{{< questionnaire/textarea id="wishes" placeholder="A kívánságaid..." >}}
