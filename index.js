/* global $, index */
$(document).ready(function () {
  $('button').click(function () {
    loadZitat()
  })
  loadZitat()
})
function loadZitat () {
  var zufallsZitat = zitate[Math.floor(Math.random() * zitate.length)].zitat
  var zufallsAutor = zitate[Math.floor(Math.random() * zitate.length)].autor
  $('blockquote p').text(zufallsZitat)
  $('blockquote footer span').text(zufallsAutor)
  
}

var zitate = [
    { zitat: 'Die Sanftmütigen werden die Erde besitzen, aber nicht die Schürfrechte', autor: 'J. Paul Getty',},
    { zitat: 'Der Pfeil aber war mit den Federn des Adlers selbst geschmückt. Oft geben wir unseren Feinden das Mittel zu unserer Zerstörung.', werk: 'Aesop'},
    { zitat: 'Weisheit und Tugend sind wie zwei Räder an einem Wagen', autor: 'Homer',},
    { zitat: 'Selbst wilde Bestien und Wandervögel geraten nicht zweimal in dieselbe Falle oder dasselbe Netz', autor: 'Japanisches Sprichwort', },
    { zitat: 'Lehre uns bedenken, dass wir sterben müssen, auf dass wir klug werden', autor: 'Hieronymus Bosch', },
    { zitat: 'Sagt denn der Ton zu dem Töpfer: Was machst du mit mir?', autor: 'Die Bibel, Psalmen 90,12', },
    { zitat: 'Wer ein gutes Buch vernichtet, tötet die Vernunft', autor: 'John Milton', },
    { zitat: 'Wer das Meer beherrscht, beherrscht alles.', autor: 'Themistokles', },
    { zitat: 'Glücklich (...) seid ihr, da eure Mauern schon wachsen!', autor: 'Vergil', },
    { zitat: 'Du sollst dem Ochsen, der da drischt, nicht das Maul verbinden.', autor: 'Die Bibel, Deuteronomium 25,4',},
    { zitat: 'Loris ist sehr dumm!', autor: 'Laurin Kulgemeyer',},
    { zitat: 'Loris stinkt nach Kot!', autor: 'Adrian Vogler',},
    { zitat: 'Loris ist dumm!', autor: 'Jana Schneider', },
    { zitat: 'Was machen die Kinder?', autor: 'Johann Wolfgang Goethe', },
    { zitat: 'Zu Hiiiiiiiilfeeeeeee', autor: 'Donald Trump', },
    { zitat: 'Ich hab\'s geschafft, Ma! Jetzt bin ich ganz oben!', autor: 'Wladimir Wladimirowitsch Putin', },
    { zitat: 'Ich bin fuchsteufelswild und lass mir das nicht mehr länger gefallen.', autor: 'Picasso',},
    { zitat: 'Ich werd zu alt für den Scheiß!', autor: 'Humphrey Bogart', },
    { zitat: 'YEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET', autor: 'Aang', },
    { zitat: 'Am schönsten ist es zu Hause.', autor: 'Angela Merkel',},
    { zitat: 'Ich bin groß, die Filme sind es, die heute keine Größe mehr haben.', autor: 'Jenny Kujawa', },
    { zitat: 'Führ mich zum Schotter!', autor: 'Lisa Hofmann', },
    { zitat: 'Wenn ich gehe, hast du Pause!', autor: 'Christian Rudholzer', },
    { zitat: 'Smoke Weed Everyday', autor: 'Lea Ost', },
    { zitat: 'Sie können die Wahrheit doch gar nicht ertragen!', autor: '2pac', },
    { zitat: 'Ich will allein sein!', autor: 'Loris Balcke', },
    { zitat: 'Morgen ist auch noch ein Tag!', autor: 'Scooby Doo', },
    { zitat: 'Verhaften Sie die üblichen Verdächtigen!', autor: 'Walt Disney', },
    { zitat: 'Ich will genau das, was sie hatte.', autor: 'Snoop Dog', },
    { zitat: 'Warum liegt hier eigentlich Stroh?', autor: 'Deine Mutter', },
    { zitat: 'Ich komme wieder.', autor: 'Arnold Schwarzenegger', },
  ]