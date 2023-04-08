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
            {{< questionnaire/radio "age" "11-26" "z" >}}
            {{< questionnaire/radio "age" "27-42" "y" >}}
            {{< questionnaire/radio "age" "43-58" "x" >}}
            {{< questionnaire/radio "age" "59 felett" "boomerandolder" >}}
        {{< /questionnaire/group >}}
        <h2>Nem</h2>       
        {{< questionnaire/radio "gender" "Férfi" "male" >}}
        {{< questionnaire/radio "gender" "Nő" "female" >}}
        {{< questionnaire/radio "gender" "Egyéb" "other" >}}
    {{< /column >}}
    {{< column >}}
        <h2>Nyelvtudás</h2>       
        <!--{{< questionnaire/checkbox "lang" "Magyar" "hu" >}}-->
        <input type="hidden" name="lang" value="hu" />
        {{< questionnaire/checkbox "lang" "Angol" "en" >}}
        {{< questionnaire/checkbox "lang" "Német" "de" >}}
        {{< questionnaire/checkbox "lang" "Egyéb" "other" >}}
        <h2>Informatikai tudás</h2>       
        {{< questionnaire/group >}}
            {{< questionnaire/radio "selfreview1" "Kiemelkedő" "exceptional" >}}
            {{< questionnaire/radio "selfreview1" "Átlag feletti" "above-average" >}}
            {{< questionnaire/radio "selfreview1" "Átlagos" "average" >}}
            {{< questionnaire/radio "selfreview1" "Sokszor vannak nehézségeim" "adequate" >}}
            {{< questionnaire/radio "selfreview1" "Kicsit sem értek hozzá" "no-clue" >}}
        {{< /questionnaire/group >}}
    {{< /column >}}
{{< /columns >}}
