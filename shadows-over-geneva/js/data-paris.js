// PARIS 1919 chapter — the peace settlement, decided term by term by the Big Three.
// ldr = the leader who led on that question. motive = "Who got what they wanted?"
window.SCENARIOS = window.SCENARIOS || {};
window.SCENARIOS.paris = [
{
  id: 'leagueP', lv: 'both', where: 'Paris', date: 'January 1919', title: 'A League of Nations',
  ldr: 'wilson', speaker: 'clemenceau',
  said: 'Mr Wilson bores me with his Fourteen Points. Why, God Almighty has only ten!',
  saidReal: 'attr',
  brief: 'Wilson has made the League of Nations the heart of his Fourteen Points, and he chairs the commission writing its rules, the Covenant. Lloyd George supports a League but wants no binding military promises. Clemenceau doubts any League can protect France, and his delegates want it to have its own army. Wilson fears that if the League is left for later, it will never happen.',
  ask: 'How is the League created?',
  opts: [
    { t: 'Write the League’s Covenant into every peace treaty, with no army of its own.' },
    { t: 'Sign the peace treaties first, and discuss a League later.', x: 'This was exactly what Wilson refused. He insisted the Covenant come first, as Part I of every treaty.' },
    { t: 'Give the League a permanent international army, as the French propose.', x: 'Britain and the USA rejected a League army. It would have meant handing control of their forces to an international body.' },
    { t: 'Leave out the League and rely on a Franco-British-American alliance.', a: true, x: 'Wilson would never sign a peace without his League. An alliance was later offered to France as well, but never instead of the League.' }
  ],
  ans: 0,
  out: 'The Covenant of the League of Nations became Part I of the Treaty of Versailles and of every other peace treaty. Members promised to settle disputes peacefully and to act together against an aggressor. The French proposal for a League army was rejected, so the League would rely on its members’ goodwill.',
  head: 'WILSON WINS HIS LEAGUE',
  fx: { auth: 10, tens: -4, mark: [{ id: 'geneva', kind: 'win', label: 'League created 1919' }] },
  focus: [4, 48, 5],
  exam: 'Link the League to the treaties: because the Covenant was part of Versailles, Germans saw the League as a club of the victors.',
  hist: 'Historians argue the League’s weaknesses, above all no army and reliance on unanimity, were built in from the start in Paris.',
  motive: 'Wilson got his League, his top priority. Lloyd George got a League with no binding military duties. Clemenceau got little: France wanted a League with real force, and was disappointed.'
},
{
  id: 'colonies', lv: 'both', where: 'Paris', date: 'January 1919', title: 'Germany’s Colonies',
  ldr: 'wilson', speaker: 'lloydgeorge',
  said: 'Australia and South Africa took those colonies with their own blood, Mr President. They will not hand them back.',
  brief: 'Germany has lost all its colonies in Africa and the Pacific during the war, and the Ottoman Empire’s Arab lands are under British and French control. Britain’s Dominions want to annex the German colonies they captured. Wilson’s Fourteen Points promised a fair settlement of colonial claims, taking account of the people who live there.',
  ask: 'What happens to the colonies?',
  opts: [
    { t: 'Return them to Germany.', x: 'No Allied government would hand back colonies that might be used as German naval bases.' },
    { t: 'Let the victors annex them outright.', x: 'Wilson refused simple annexation. It would have made the war look like a land grab.' },
    { t: 'Make them League “mandates”, run by the victors on the League’s behalf.' },
    { t: 'Hold referendums in every colony.', a: true, x: 'No one proposed votes for the colonial peoples. The mandate system assumed outside rule would continue.' }
  ],
  ans: 2,
  out: 'Germany’s colonies and the Ottoman Arab lands became League mandates. Britain took Tanganyika, Iraq and Palestine. France took most of Togo and Cameroon, and Syria and Lebanon. South Africa, Australia, New Zealand and Japan took other German territories. The League’s Mandates Commission was supposed to check that they were ruled in the interests of their peoples.',
  head: 'GERMAN COLONIES BECOME LEAGUE MANDATES',
  fx: { tens: 2, mark: [{ id: 'paris', kind: 'deal', label: 'Mandates 1919' }] },
  focus: [20, 15, 2],
  exam: 'Germany lost all its colonies: a key term to know when judging whether Versailles was fair.',
  hist: 'Many historians see the mandates as colonialism under a new name, though the League’s oversight was a first step towards international accountability.',
  motive: 'Britain and France gained most, and the Dominions got their prizes in all but name. Wilson got a principle of supervision instead of open annexation. Germany got nothing back.'
},
{
  id: 'armyP', lv: 'both', where: 'Paris', date: 'March 1919', title: 'Disarming Germany',
  ldr: 'lloydgeorge', speaker: 'clemenceau',
  said: 'Germany must never again be able to march on Paris.',
  brief: 'Marshal Foch wants Germany limited to a small army of short-service conscripts. Lloyd George worries that conscription would train millions of reservists who could be called up later. All three leaders agree Germany must be disarmed. The Fourteen Points spoke of reducing armaments, and the Allies say German disarmament is the first step towards general disarmament.',
  ask: 'What limits are placed on Germany?',
  opts: [
    { t: 'Disarm Germany completely, with no army at all.', x: 'Germany needed some force to keep order at home, especially with revolution in the air.' },
    { t: 'An army of 200,000 conscripts, as Foch wants.', x: 'Lloyd George objected that short-service conscription would build a large trained reserve.' },
    { t: 'An army of 100,000 long-service volunteers, no tanks or air force, and a tiny navy with no submarines.' },
    { t: 'Limit only the German navy.', a: true, x: 'France would never accept a Germany with a large army on its border.' }
  ],
  ans: 2,
  out: 'Germany’s army was cut to 100,000 men, volunteers only. It could have no tanks, military aircraft or submarines, and only six battleships. Its General Staff was abolished. The Allies said other nations would disarm later, a promise Germany would hold them to.',
  head: 'GERMAN ARMY CUT TO 100,000',
  fx: { tens: 2, mark: [{ id: 'versailles', kind: 'deal', label: 'Military terms 1919' }] },
  focus: [8, 51, 5],
  exam: 'Learn the military terms. Germans saw them as humiliating, especially since other powers did not disarm.',
  hist: 'The promise of general disarmament gave Germany a powerful argument in the 1930s, which Hitler used at the Disarmament Conference.',
  motive: 'Clemenceau got a weak German army; Lloyd George got the volunteer system he wanted and the end of the German navy as a threat to Britain. Wilson accepted it as a first step towards worldwide disarmament.'
},
{
  id: 'polandP', lv: 'both', where: 'Paris', date: 'March 1919', title: 'Poland and Danzig',
  ldr: 'lloydgeorge', speaker: 'pilsudski',
  said: 'Wilson promised Poland access to the sea. Danzig is our only port.',
  brief: 'Point 13 of the Fourteen Points promised an independent Poland with access to the sea. The obvious port is Danzig, but almost all its people are German. A commission recommends giving Danzig and a wide strip of German land to Poland. Lloyd George warns that putting millions of Germans under Polish rule will cause a future war. France wants a strong Poland as an ally against Germany.',
  ask: 'What is decided?',
  opts: [
    { t: 'Give Danzig and the whole corridor to Poland.', x: 'Lloyd George blocked this. He argued it would put too many Germans under Polish rule.' },
    { t: 'Give Poland a corridor to the sea, but make Danzig a Free City run by the League.' },
    { t: 'Give Poland no access to the sea.', x: 'That would break Wilson’s Point 13, and France insisted on a strong Poland.' },
    { t: 'Let Germany keep Danzig and give Poland rights to use the port.', a: true, x: 'Poland and France rejected leaving Danzig German. The Free City was the compromise.' }
  ],
  ans: 1,
  out: 'Poland got the “Polish Corridor”, a strip of land that cut East Prussia off from the rest of Germany. Danzig became a Free City under League protection, inside Poland’s customs area. Plebiscites were held in parts of East Prussia, which voted German.',
  head: 'DANZIG A “FREE CITY” — POLAND GETS CORRIDOR',
  fx: { tens: 4, mark: [{ id: 'danzig', kind: 'deal', label: 'Danzig Free City 1919' }] },
  focus: [19, 53, 7],
  exam: 'The Corridor and Danzig became Germany’s most bitter grievances, and Hitler’s pretext in 1939.',
  hist: 'Lloyd George’s warning that German minorities in Poland would cause the next war is often quoted, because in 1939 it came true.',
  motive: 'Wilson got his Polish access to the sea, France got a stronger ally, and Lloyd George limited the number of Germans handed to Poland. Germany lost land and saw East Prussia cut off.'
},
{
  id: 'rhineP', lv: 'both', where: 'Paris', date: 'April 1919', title: 'The Rhine Crisis',
  ldr: 'clemenceau', speaker: 'wilson',
  said: 'You cannot cut a nation in pieces, Monsieur Clemenceau. Germany must be able to live.',
  brief: 'The conference nearly breaks down over the Rhine. Clemenceau and Foch want the German land west of the river turned into a separate state, and France also wants the coal-rich Saar. Wilson is so angry he orders his ship to be readied to take him home. Lloyd George backs Wilson. To save the conference, Britain and America offer France a promise to defend it if Germany attacks.',
  ask: 'What compromise saves the conference?',
  opts: [
    { t: 'A separate Rhineland state under French protection.', x: 'Wilson and Lloyd George refused to break up Germany. They saw it as a recipe for a new war.' },
    { t: 'The Rhineland is demilitarised and occupied for 15 years; France gets the Saar mines, with the Saar run by the League; Britain and America guarantee France.' },
    { t: 'No special terms: the Rhineland stays fully German.', x: 'Clemenceau would never have signed without real security on the Rhine.' },
    { t: 'France annexes the Saar outright.', a: true, x: 'France got the Saar’s coal for 15 years, but the territory went to the League, with a vote at the end.' }
  ],
  ans: 1,
  out: 'The compromise of April 1919: the Rhineland was demilitarised for ever and occupied by Allied troops for 15 years. The Saar was run by the League for 15 years, with its coal going to France, followed by a vote. Alsace-Lorraine returned to France. Britain and the USA signed guarantees to defend France, but they lapsed when the US Senate rejected the treaty.',
  head: 'COMPROMISE ON THE RHINE SAVES THE CONFERENCE',
  fx: { tens: 2, mark: [{ id: 'rhineland', kind: 'deal', label: 'Rhineland demilitarised' }, { id: 'saar', kind: 'deal', label: 'Saar to League' }] },
  focus: [6, 50, 7],
  exam: 'A clear example of compromise between the Big Three. Each got something; none got everything.',
  hist: 'The collapse of the Anglo-American guarantee left France feeling betrayed, which explains much of its hard line in the 1920s.',
  motive: 'Clemenceau got security on paper, the Saar coal and Alsace-Lorraine. Wilson and Lloyd George stopped Germany being broken up. The guarantee that made France agree later vanished.'
},
{
  id: 'reparationsP', lv: 'both', where: 'Paris', date: 'April 1919', title: 'Guilt and Payment',
  ldr: 'lloydgeorge', speaker: 'clemenceau',
  said: 'Germany destroyed our mines, our farms, our towns. Germany will rebuild them.',
  brief: 'France and Belgium have suffered enormous damage, and British voters were promised that Germany would pay. To claim a large share, Lloyd George wants war pensions included as well as physical damage. Germany cannot possibly pay everything, and the experts cannot agree on a figure. Wilson wants a fixed, reasonable sum.',
  ask: 'What do the Big Three decide on war guilt and reparations?',
  opts: [
    { t: 'No reparations, in the spirit of the Fourteen Points.', x: 'British and French voters would never have accepted it, and France needed money to rebuild.' },
    { t: 'Fix a moderate total now, as Wilson wants.', x: 'Britain and France could not agree a figure low enough for Germany to pay and high enough for their voters.' },
    { t: 'A war-guilt clause making Germany liable for the damage, with the total left to a commission to decide later.' },
    { t: 'Germany must pay the full cost of the war, including all Allied war debts.', a: true, x: 'The treaty asked for war damage and pensions, not the entire cost of the war.' }
  ],
  ans: 2,
  out: 'Article 231, the “war-guilt clause”, made Germany accept responsibility for the loss and damage caused by the war. War pensions were included, which raised the bill. The total was left to a Reparations Commission, which set it in 1921 at 132 billion gold marks (£6,600 million).',
  head: 'GERMANY TO ACCEPT WAR GUILT — AND PAY',
  fx: { tens: 8, mark: [{ id: 'versailles', kind: 'deal', label: 'Article 231' }] },
  focus: [3, 49, 6],
  exam: 'War guilt and reparations are the terms Germans resented most. Be ready to explain why.',
  hist: 'Keynes called reparations ruinous in The Economic Consequences of the Peace (1919). Sally Marks argues Germany could have paid much of what was finally demanded.',
  motive: 'Clemenceau got money for rebuilding France, and Lloyd George kept his election promise and a larger share for Britain. Wilson’s wish for a fixed, moderate sum lost out.'
},
{
  id: 'austriaP', lv: 'both', where: 'Paris', date: 'May 1919', title: 'The End of Austria-Hungary',
  ldr: 'clemenceau', speaker: 'orlando',
  said: 'Italy was promised the Tyrol and Istria. We expect the promise to be kept.',
  brief: 'The Austro-Hungarian Empire has collapsed into new states: Czechoslovakia, Yugoslavia and an enlarged Poland and Romania. What is left of Austria, a small German-speaking state, wants to unite with Germany. France is horrified: a union would make Germany bigger than before the war. Wilson’s Fourteen Points promised self-determination for the peoples of the empire.',
  ask: 'How are Austria and Hungary treated?',
  opts: [
    { t: 'Allow Austria to unite with Germany, as most Austrians want.', x: 'France and its allies would never allow Germany to gain territory after losing the war.' },
    { t: 'Forbid union with Germany and give large areas of Austria and Hungary to their neighbours.' },
    { t: 'Rebuild the empire as a federation.', x: 'The empire had already broken apart, and its peoples had declared their own states.' },
    { t: 'Draw every border strictly along language lines.', a: true, x: 'Borders also followed strategy, railways and wartime promises, so millions ended up as minorities.' }
  ],
  ans: 1,
  out: 'The Treaty of St Germain (September 1919) banned Austria from uniting with Germany, limited its army to 30,000 and gave land to Czechoslovakia, Italy, Yugoslavia and Poland. About 3 million German speakers in the Sudetenland became citizens of Czechoslovakia. The Treaty of Trianon (June 1920) took about two-thirds of Hungary’s land, leaving over 3 million Hungarians in neighbouring states.',
  head: 'AN EMPIRE DIVIDED — ANSCHLUSS FORBIDDEN',
  fx: { tens: 6, mark: [{ id: 'vienna', kind: 'deal', label: 'St Germain 1919' }, { id: 'budapest', kind: 'deal', label: 'Trianon 1920' }] },
  focus: [18, 47, 5],
  exam: 'Know the other treaties too. St Germain and Trianon created the minorities, such as the Sudeten Germans, that Hitler later exploited.',
  hist: 'Self-determination was applied unevenly: it helped Czechs, Poles and South Slavs, but not Germans or Hungarians, which critics saw as hypocrisy.',
  motive: 'Clemenceau got a Germany that could not absorb Austria and strong new allies to its east. Wilson got new nations, but not consistent self-determination. Italy got South Tyrol, but not all it wanted.'
},
{
  id: 'germanyP', lv: 'both', date: 'June 1919', title: 'The German Reply',
  ldr: 'lloydgeorge', speaker: 'bauer',
  said: 'This is not a treaty. It is a Diktat, and we were not even allowed to speak.',
  brief: 'On 7 May the German delegation received the terms; they were not allowed to negotiate in person. Germany sent back long written objections. Lloyd George is now worried the treaty is too harsh and might drive Germany to refuse or turn to Bolshevism. Clemenceau will not reopen the main terms.',
  ask: 'How do the Allies respond?',
  opts: [
    { t: 'Open face-to-face negotiations with the Germans.', x: 'Clemenceau refused, and the Allies feared their compromises would unravel.' },
    { t: 'Make one small change, a vote in Upper Silesia, then give Germany an ultimatum to sign.' },
    { t: 'Soften the war-guilt and reparations terms.', x: 'Neither France nor British public opinion would accept it.' },
    { t: 'Invade Germany at once to force a signature.', a: true, x: 'Foch prepared an advance, but the ultimatum came first, and Germany signed.' }
  ],
  ans: 1,
  out: 'Lloyd George won one concession: a plebiscite in Upper Silesia instead of handing it straight to Poland. The Allies gave Germany days to sign or face invasion. The German fleet scuttled itself at Scapa Flow, and on 28 June 1919, five years to the day after the Sarajevo assassination, German delegates signed in the Hall of Mirrors.',
  head: 'GERMANY SIGNS IN THE HALL OF MIRRORS',
  fx: { tens: 8, mark: [{ id: 'versailles', kind: 'fail', label: 'Treaty signed 28 June 1919' }, { id: 'silesia', kind: 'deal', label: 'Upper Silesia vote' }] },
  focus: [3, 49, 6],
  exam: 'The Germans called it a Diktat because they were not allowed to negotiate. That is central to the German view of fairness.',
  hist: 'Historians point out that Germany’s own peace with Russia at Brest-Litovsk (1918) was far harsher, a useful counter-argument in “Was it fair?” essays.',
  motive: 'Lloyd George won a small change he thought fairer. Clemenceau kept the main terms. Germany got nothing it asked for, which fed the myth of the Diktat.'
},
{
  id: 'neuilly', lv: 'a', date: 'November 1919', title: 'Bulgaria: Neuilly',
  ldr: 'clemenceau', speaker: 'clemenceau',
  said: 'Bulgaria chose the wrong side. It will pay like the others.',
  brief: 'Bulgaria fought alongside Germany. Its neighbours Greece, Yugoslavia and Romania all have claims on Bulgarian land, and Bulgaria has a coastline on the Aegean Sea that Greece wants. The Allies want the Balkans stable and their own allies rewarded.',
  ask: 'What does the Treaty of Neuilly do?',
  opts: [
    { t: 'Take Bulgaria’s Aegean coast for Greece, cut its army to 20,000, and impose reparations.' },
    { t: 'Leave Bulgaria’s borders unchanged.', x: 'Greece and Yugoslavia, both Allies, expected rewards.' },
    { t: 'Divide Bulgaria between its neighbours.', x: 'Nobody proposed abolishing Bulgaria. It survived as a smaller state.' },
    { t: 'Place Bulgaria under a League mandate.', x: 'Mandates were for former colonies and Ottoman lands, not European states.' }
  ],
  ans: 0,
  out: 'The Treaty of Neuilly (November 1919) gave Western Thrace to Greece, so Bulgaria lost its Aegean coast, and gave some border land to Yugoslavia. Bulgaria’s army was cut to 20,000 and it had to pay reparations. Bulgaria remained resentful, as the 1925 border clash with Greece showed.',
  head: 'BULGARIA LOSES ITS COAST',
  fx: { tens: 3, mark: [{ id: 'sofia', kind: 'deal', label: 'Neuilly 1919' }] },
  focus: [24, 42, 6],
  exam: 'Know all five treaties: Versailles, St Germain, Trianon, Neuilly and Sèvres (later Lausanne).',
  hist: 'Neuilly is often seen as the least harsh of the treaties in land lost, but losing the Aegean coast was deeply resented in Bulgaria.',
  motive: 'The Allies rewarded Greece and Yugoslavia, their own allies, and weakened a defeated enemy. Bulgaria had no voice.'
},
{
  id: 'senate', lv: 'both', date: 'March 1920', title: 'The Senate Votes',
  ldr: 'wilson', speaker: 'wilson',
  said: 'I will not accept reservations that tear the heart out of the Covenant.',
  brief: 'Wilson has returned home with the treaty, but the US Senate must approve it by a two-thirds majority. Republican senators, led by Henry Cabot Lodge, will accept it only with “reservations”. Above all, they reject Article 10 of the Covenant, which they say could drag America into foreign wars. Wilson, weakened by a severe stroke, refuses to compromise.',
  ask: 'What happens in the Senate?',
  opts: [
    { t: 'Wilson accepts Lodge’s reservations, and the USA joins the League.', x: 'Wilson refused, and told Democratic senators to vote against the treaty with reservations.' },
    { t: 'The Senate rejects the treaty, and the USA never joins the League.' },
    { t: 'The Senate approves the treaty unchanged.', x: 'Wilson never had the two-thirds majority he needed.' },
    { t: 'The USA joins the League but rejects the rest of the treaty.', a: true, x: 'The Covenant was part of the treaty. Rejecting the treaty meant rejecting the League.' }
  ],
  ans: 1,
  out: 'The Senate rejected the treaty in November 1919 and again in March 1920. The USA never joined the League and made a separate peace with Germany in 1921. Because of this, the American and British guarantees to defend France also lapsed.',
  head: 'SENATE REJECTS TREATY — AMERICA STAYS OUT',
  fx: { auth: -14, tens: 6, mark: [{ id: 'washington', kind: 'fail', label: 'USA rejects League 1920' }] },
  focus: [-40, 42, 2],
  exam: 'The absence of the USA is a key weakness of the League. Explain how it affected sanctions and France’s sense of security.',
  hist: 'Historians debate whether Wilson’s refusal to compromise or Republican isolationism was more to blame for America staying out.',
  motive: 'Wilson’s League survived without the USA. Lodge and the Republicans kept America free of foreign commitments. France lost the guarantee it had been promised.'
},
{
  id: 'sevres', lv: 'a', date: 'November 1922', title: 'From Sèvres to Lausanne',
  ldr: 'bonarlaw', speaker: 'poincare',
  said: 'France will not fight the Turks for Greece. Make terms, as we have done.',
  brief: 'The Treaty of Sèvres (1920) carved up the Ottoman Empire, gave Greece land in Turkey, and put the Straits under international control. Turkish nationalists under Mustafa Kemal rejected it and have now driven the Greek army out of Anatolia. France and Italy have already made their own deals with Kemal. Lloyd George threatened war at Chanak and lost office as a result.',
  ask: 'What do the Allies do?',
  opts: [
    { t: 'Enforce Sèvres by war against Kemal.', x: 'Britain’s Dominions and France refused to fight, and British opinion would not support another war.' },
    { t: 'Negotiate a new treaty that recognises Turkey’s gains.' },
    { t: 'Withdraw from the region and sign nothing.', x: 'Britain needed a settlement to secure the Straits and its position in the Middle East.' },
    { t: 'Ask the League to decide Turkey’s borders.', x: 'The great powers negotiated directly at Lausanne. Only the Mosul question went to the League later.' }
  ],
  ans: 1,
  out: 'The Treaty of Lausanne (July 1923) replaced Sèvres. Turkey regained Anatolia and eastern Thrace, paid no reparations, and was recognised as an independent republic. Greece and Turkey exchanged more than a million people. It was the only 1919–20 settlement overturned by force within a few years.',
  head: 'LAUSANNE: TURKEY TEARS UP SÈVRES',
  fx: { tens: -2, mark: [{ id: 'constantinople', kind: 'deal', label: 'Lausanne 1923' }] },
  focus: [30, 40, 5],
  exam: 'Lausanne shows that a determined defeated nation could overturn a peace treaty, a lesson others noticed.',
  hist: 'Historians often contrast Lausanne with Versailles: a negotiated peace that lasted, versus a dictated one that did not.',
  motive: 'Turkey won almost everything Kemal wanted. Britain secured freedom of navigation through the Straits. Greece lost the gains Lloyd George had backed.'
}
];

// "Was it fair?" verdict shown at the end of the Paris chapter.
window.PARIS_VERDICT = [
  { who: 'Germany', view: 'A Diktat: dictated, not negotiated. Germany lost about 13% of its land in Europe, all its colonies and most of its army, and was blamed for the war. Almost every German wanted it overturned.' },
  { who: 'France', view: 'Too soft. Germany was left united, with more people and industry than France, and the British and American guarantees collapsed. Marshal Foch is said to have called it “not a peace, but an armistice for twenty years”.' },
  { who: 'Britain', view: 'Satisfied at first: the German fleet and colonies were gone. Within a few years, many Britons, influenced by Keynes, thought it too harsh on Germany.' },
  { who: 'USA', view: 'Wilson got his League, but the Senate rejected the treaty. America turned away from Europe.' },
  { who: 'Italy', view: 'A “mutilated victory”: no Fiume, no Dalmatia, no colonies, despite great sacrifices.' },
  { who: 'Austria, Hungary, Bulgaria and Turkey', view: 'Austria and Hungary were shrunk to small states; millions of Germans and Hungarians lived as minorities abroad. Bulgaria lost its coast. Turkey overturned its treaty by force.' },
  { who: 'Historians', view: 'Keynes called it a “Carthaginian peace” that would ruin Europe. Margaret MacMillan argues the peacemakers did a reasonable job in impossible conditions and are wrongly blamed for 1939. Remember Brest-Litovsk (1918): Germany’s own terms for Russia were harsher.' }
];
