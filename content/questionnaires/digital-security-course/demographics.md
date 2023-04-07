---
title: "Rólad"
weight: 5
---
# Pár infó rólad...

{{< columns vcentered=True >}}
    {{< column >}}
        <h2>Korosztály</h2>       
        {{< questionnaire/group >}}
            {{< questionnaire/radio "age" "11 alatt" "alpha" >}}
            {{< questionnaire/radio "age" "26-11" "z" >}}
            {{< questionnaire/radio "age" "42-27" "y" >}}
            {{< questionnaire/radio "age" "58-43" "x" >}}
            {{< questionnaire/radio "age" "77-59" "boomer" >}}
            {{< questionnaire/radio "age" "95-78" "silent" >}}
            {{< questionnaire/radio "age" "95 felett" "presilent" >}}
        {{< /questionnaire/group >}}
    {{< /column >}}
    {{< column align="right" >}}
        <h2>Nem</h2>       
        {{< questionnaire/radio "gender" "Férfi" "male" >}}
        {{< questionnaire/radio "gender" "Nő" "female" >}}
        {{< questionnaire/radio "gender" "Egyéb" "other" >}}
        <h2>Nyelvtudás</h2>       
        {{< questionnaire/checkbox "lang" "Magyar" "hu" >}}
        {{< questionnaire/checkbox "lang" "Angol" "en" >}}
        {{< questionnaire/checkbox "lang" "Német" "de" >}}
        {{< questionnaire/checkbox "lang" "Egyéb" "other" >}}
    {{< /column >}}
{{< /columns >}}
