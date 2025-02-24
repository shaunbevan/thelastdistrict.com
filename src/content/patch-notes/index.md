# Patch Notes

## Beta Update 9
*February 24, 2025*

### New Features
Introducing OUTBREAKS, a limited-time event where players compete for points to earn rewards while discovering new game content.

#### Outbreak 1: Expansion
- In this first Outbreak event, players will work together to expand the map from a 7x7 grid to a 10x10 grid. This is achieved through two different methods based on character type:
  - Survivors: A new mission, "Breaking Through," is available at the City Hall. Survivors must search for a package within a district and deliver it to Corelogic Manufacturing. Completing the mission grants 1 vote to reveal a building.
  - Rotters: Rotters must kill the Courier Survivors roaming the district. Each successful kill grants 1 vote to uncover a building.
- How Building Expansion Works:
    - Once a building receives 5 votes, it is revealed.
    - Players can travel to newly revealed buildings if they are adjacent to an already discovered building in the district.
    - The voting system is reset each outbreak, so players will need to work together to uncover the map before the outbreak ends.
- Outbreak Status
    - A new Outbreak button has been added to the profile screen. This interface allows players to:
        - View the current outbreak status and progression
        - Cast votes for buildings to reveal
        - Track rankings via the leaderboard
- Leaderboard & Rewards
    - Players earn 1 point per completed mission (Breaking Through or Courier Survivor kill).
    - 1 additional point is awarded for each vote cast.
    - At the end of the outbreak:
      - All participants receive a reward.
      - Top 10 players earn a bonus reward.
- Pickup Tasks
    - A new task type has been added where a package spawns at a random location outside a building in the district. Players must find the package and deliver it to a designated drop-off location.
    - The directions screen provides hints about how far away the package is.
    - Only players assigned to the task can see the package.
- Infestations
  - Rotters now have a new ability called Infestation. Using an animus well power, rotters can spawn infestations inside ruined buildings.
  - Infestations are stationary objects with high armor but low hit points.
  - Survivors must destroy infestations before they can begin repairing a building.
  - Different infestation types can cause stamina or health damage.
- Permanent Anima Conversion
    - Rotters can now convert anima into permanent anima, which is not lost on death. The initial conversion rate is 2 temporary anima for 1 permanent anima.
    - When purchasing anima powers, the well will use temporary anima first before taking from permanent anima.
    - Only temporary anima can be donated to the well.
  
### Improvements
- Mutations now have a 10% chance to be lost on death. Previously it was a 100% chance to lose a mutation.  
- Miasma will now appear if 20% of the buildings in the district are ruined.
- Players can now see available tasks if they already have an active task, making it easier to plan and prioritize missions.  
- Status maps are now generated as images, ensuring proper formatting and display across all devices.
- Added the ability for admins to send a system-wide message to all in-game radio (echoes) channels

### Bug Fixes
* Fixed an issue where the expiration date for bot voting was not accurate.
* Fixed an issue where tasks were giving out rewards that were not part of the current loot table.
* Fixed the available training list formatting for desktop
* Fixed a bug where unread messages would show for messages older than 24 hours

## Beta Update 8 - Patch 5
*February 13, 2025*

### Improvements  
- Added an in-depth Game Guide in the `/help` menu to explain all the various mechanics of the game
- Added a Survivor Guide and Rotter Guide to help players get started when they join The Last District.
- Added the two playstyle guides to the create character flow so players can get a bit of a headstart on some of the important first steps of the game.
If you think something should be added to the guide please let me know!


## Beta Update 8 - Patch 4
*February 12, 2025*

### Improvements  
- I can appreciate the effort for some emergent gameplay and I’m down for learning how people want to play this game as I continue to develop it. Given that there is currently no survivor vs survivor mechanics, it’s not possible for other survivors to police themselves. So, for now, I’m making a few tweaks:
    - Survivors can no longer remove barricades below Reinforced level.
    - For barricades at Reinforced and above, the removal success rate is now lower.
    - Survivors can no longer dismantle generators.

### Bug Fixes  
* Fixed an issue where the blood moon notification text was not showing in the game world.
* The blood moon will appear every three days instead of every other day.

## Beta Update 8: Patch 3
*February 23, 2025*

### New Features
- *The Last District* is now on [Top.gg](https://top.gg/bot/1190773943330668666). To bring in more players, I need your help by voting often and leaving a 5-star review if you enjoy the game. It'll make a huge difference.
- You can vote every 12 hours for a 50% XP/Anima boost on all actions and combat.  
- Weekend bonus! Votes count twice, and you’ll get Double XP/Anima for 12 hours.  
- This game thrives because of players like you—so please smash that Vote button on your Profile screen and let’s grow the community! 

### Improvements  
- Tweaked character creation text to make it crystal clear: you can play as a survivor or a rotter.

## Beta Update 8: Patch 2
*February 9, 2025*

### New Features
- Survivors can now communicate globally via the Listen Radio command in your `/profile` screen.  
    - Tune into channels between 26.0 - 28.0 MHz.
    - The default survivor emergency channel is 27.5 MHz.
    - Messages sent on a frequency will remain for 24 hours.  
    - No radio item is required to use the handheld radio system.  

- Rotters can now communicate globally via the Listen Echoes command in your `/profile` screen.  
    - Unlike Survivors, Rotters cannot change channels.  
    - Messages sent via echoes will remain for 24 hours.  
    - No item is required to send an echo.  

- A new unread messages icon :radio: has been added to your character bar at the bottom of most embeds, indicating unread radio or echo messages depending on your character type.  

- Introduced #news-feed , a new channel displaying public events such as players joining the game—whether on this server or another.

## Beta Update 8: Patch 1
*February 6, 2025*

### Public Bot
- The Last District Bot will soon be made public so it can be invited to other Discord servers. More information will be shared later. Hopefully, this will make the game more accessible to other Discord users.
- Created a new website to promote the game: https://www.thelastdistrict.com/

### New Features
- New players can now choose to start off as a Rotter during character creation. The player will spawn inside a ruined building in the district, and, if no ruined building is available, then they will spawn in a random location outside.
- Added a help command for new players and server admins.
- Added a maintenance mode that will prevent players from running commands while the app is in the process of being updated.

## Beta Update 8
*February 2, 2025*

### New Features
- Event Log – You can now access a 24-hour log of events in your current location. Moving will reset the log. NPC movement logs will no longer be shown.  
- How I Died Log – After being knocked down, you can now view the combat details of your last defeat before standing up.  
- Feral Actions – Player Rotters can now convert stamina into stored actions for combat. This system will be expanded further in the future, but for now Player Rotters will have an extra combat action. 
- Belts – A new equipment slot for belts has been added. Belts let you attach items without taking up inventory space.  
    - Different belts exist for tools, ammo, healing items, food, and drinks.  
    - Only one belt can be worn at a time.  
- Surgery Skill – The Surgery skill is now functional.  
    - Requires Level 10 First Aid to train.  
    - Can only be used on other players.  
    - Uses a Trauma Kit to heal based on a percentage of the target's max HP.

### Improvements  

- Flee Mechanics Overhaul – Fleeing combat has been reworked:  
    - As before, the combat defender must attempt to flee by pressing the Flee button.  
    - If the attacker misses any future attacks, you will successfully flee.  
    - If they keep landing hits, you must stay in the fight.  
    - Upon fleeing, you will be moved to a random nearby location (outdoors) or outside (if inside a building).  
- Embed Formatting Fix for Android – Spacing in embeds has been removed to improve usability on Android. Spacing has also been reduced for desktop and iOS.
- Mutation Level Changes – Zombies can now gain multiple levels in a mutation, but this won't necessarily increase the mutation’s power. However, upon death, they will lose a level instead of resetting completely.  
- Zombie Cap Adjustments – A buffer has been added to ensure special event zombies (e.g. noise-search zombies) can still appear.  
- Ammo Display in Inventory – Weapons in your inventory will now show their current ammo count.  
- Use Consumables from Search Embed – You can now use consumable items directly from the search results.  

### Bug Fixes  

- Inventory Page Persistence – Your inventory will no longer reset to page 1 after performing actions.  
- Seek Rotters Won't Horde Up – Fixed an issue where rotters who have the seek goal were clustering in large numbers.  
- Training Stockpile Visibility – You can now see training stockpiles even if you're maxed out on all skills in a location.  
- Duplicate Body Bug – Fixed an issue where the same corpse was appearing both inside and outside a building.  
- Stow Item Text Fix – Weight measurement now correctly displays as lbs instead of enc.

## Beta Update 6 - Patch 1
*January 26, 2025*
### New Features

### The Blood Moon Rises!
- Introducing the Blood Moon: Occurs every other day (or permanently set by admins), sending rotters into a frenzy with unique abilities and bonuses.
    - NPC rotters will periodically attack players, reducing them to 25 HP before causing bleeding.
     - Bleeding Effect: Drains HP after using X amount of stamina and can only be stopped by healing. If HP reaches 0 while bleeding, you die.
     - Track bleeding via the :drop_of_blood: emoji next to your name or in your profile's status effects.
    - Player rotter bonuses during Blood Moon:
     - Increased barricade attack and desecration effectiveness.
     - Bonus anima generation for anima-rewarding actions.
    - More NPC rotters spawn.
    - NPC rotters have an increased chance of attacking barricades and desecrating buildings.
    - Rotters are harder to hit due to their frenzy.
    - When outside, a Blood Moon warning message will appear.

### Improvements
- After crafting a syringe, the back button now returns to the analyzer instead of the look screen.
- The Bone Spike mutation now provides bonuses for desecration actions.
- When knocked down, your role changes after the first look instead of when pressing stand-up.

### Bug Fixes
- Crafting a Revive Syringe with multiple Empty Injectors now consumes only 1 injector, as intended.

### Balance Changes
To balance gameplay between rotters and survivors, the following changes have been made:
- Survivors gain XP equal to 25% of damage dealt in combat.
- Rotters gain anima equal to 30% of damage dealt in combat.
- Carpentry and Construction bonuses increment by 3% each level (was 2%), with a max bonus of +30%.
- Bone Thrust Mutation: Grants +15% barricade attack bonus.
- Bone Spike Mutation: Grants +10% desecration chance bonus.
- Survivors earn 1 XP for survivor actions.
- Rotters earn 2 anima for rotter actions.
- Weapon durability decreases by 1 (was 2) for each attack.


## Beta Update 6
*January 23, 2025*

### New Features

- XP and Anima Adjustments
    - You will now gain XP and Anima in NPC combat based on 50% of the damage you deal.
    - In PvP, XP and Anima are awarded at 50% of damage dealt only if you defeat the other player.

- Revive System Updates
    - Reviving Player Rotters now requires that you enter into a combat encounter. To see the Revive action, the Player Rotter must be under 25% of their max health and you must have a Revive Syringe in your inventory. Upon revival, combat ends, and you gain XP for half the damage dealt.
    - Crafting a Revive Syringe post-cure discovery will require an Empty Injector, which can be found in specific locations.
    - Revived players must spend 25 stamina to stand up and return as survivors.

- Healing Other Survivors
    - Survivors can now heal others directly via the Inspect Player screen, provided you have healing items in your inventory.

### Improvements

- Inventory Enhancements
    - Healing items now display bonus health granted by the First Aid skill.
    - Weapon types (blunt, bladed, pistol, etc.) are now shown in item descriptions.
    - Power generators display remaining fuel and durability.
    - Inventory actions no longer reset to the first page.

- Inspection Improvements
    - Inspecting a player provides a detailed narrative of their health, stamina, armor, thirst, and hunger.
    - Viewing NPC Rotters or survivors now reveals their HP and armor stats.

- Power Generator Updates
    - Dismantling generators with a crowbar prompts confirmation.
    - Attacking and repairing generators now use the encounter system with a 40% success rate.
    - Dismantled generators retain fuel and durability when stored or re-placed in buildings.

### Other Changes
- DNA sample rewards are now more likely to match your needs.
- Knocked-down players now appear as bodies on the look screen.
- The bot now updates your in-game role (Survivor/Rotter) automatically based on your status.
- Miasma mutation timers are now a fixed 45 minutes per skill, unaffected by zombie skill levels.
- The Rotter Undying Skill now regenerates health after a certain amount of stamina is consumed.
- Corpse Walk requires 1 stamina per map movement.

### Bug Fixes
- Resolved an issue allowing ranged weapons to fire without ammo.
- Fixed a bug where ranged weapon use reduced melee ultimate action uses.
- Items in hand no longer count toward overall inventory space.
- Item durability now displays correctly in the inventory.
- Fixed power generators not returning to inventory after dismantling.
- Auto-trash and trash options now appear during ransacking.
- Fixed armor values not displaying properly in inventory.
- Fixed an issue where the attack generator action's stamina cost wasn't displaying correctly.


## Beta Update 5: Patch 1
*January 19, 2025*

### Changes to the Running Skill

- The Running skill was originally intended to reduce travel time between districts when multiple districts became part of the game. For example, moving from one district to another was meant to take approximately two hours, and Running would help players shorten this travel time.
- However, with the game currently operating within a single small district due to the player base size, the Running skill was temporarily repurposed to allow survivors free movement. While this adjustment was initially made to enhance gameplay, it has become clear that free movement grants survivors an excessive advantage. Allowing movement without stamina costs disrupts the action economy, which is a critical part of decision-making in this game. Actions are meant to have a cost, and the ability to move freely across the map provided too great a benefit, particularly in rotter hunting and combat scenarios.
- To maintain balance between survivors and rotters, the Running skill will be disabled for now. It will eventually be reworked to fulfill its original purpose when the game transitions to include multiple districts. Players who have invested skill points in Running will be refunded, ensuring they can reallocate those points elsewhere.

## Beta Update 5
*January 18, 2025*

### Improvements
- Rotter Gameplay Balance:
    - Rotters can now innately attack barricades with a base 20% success rate. Mutations and Well Powers can increase this.
    - Well Power anima costs reduced by 50%.
- Inventory Management QoL:
    - Survivors can mark items for Auto-Trash during searches. Use the "Auto-Trash & Remove" button to trash an item and add it to the Auto-Trash list.
    - Manage your Auto-Trash list in your inventory screen to remove items.
    - Trash items directly from the search screen.
    - Trash your currently held item.
- Prevented NPC rotters from creating oversized hordes in buildings.
- Inventory now displays alphabetically again.
- Inspecting Survivors or Rotters now includes their armor, thirst, and hunger descriptions.

### Bug Fixes
- Resolved "Interaction failed" errors after encounters.
- Player inspection now correctly shows stamina descriptions.

## Beta Update 4 - Patch 5
*January 16, 2025*

### Improvements  
- To balance player-vs-player combat, Rotters will now lose all active powers upon being defeated.  
- The Rotter skill Shriek has been reworked to pull a nearby NPC Rotter to the player’s location instead of spawning a new one.  
- Players can now hear the Shriek action in their event logs, along with the direction it originated from.  
- NPC Survivors with the Guard role will now seek out buildings with barricades below the Reinforced level to protect. Once the building reaches Reinforced or higher, they will move on to defend another vulnerable building.  

### Bug Fixes  
- Resolved an issue where Survivors were unable to attack Rotters who had the Bone Carapace skill active.


## Beta Update 4 - Patch 4
*January 15, 2025*

### Improvements
- Barricading buildings has been streamlined by halving the total pieces needed to reach the max barricade level, making the process less tedious.
- The chance of successfully barricading at lower levels has been significantly increased. However, as the barricade level rises, it becomes progressively harder to barricade.
- The base chance to remove a barricade remains unchanged.
- Weapon descriptions now include the final blow damage for better clarity.
- Players killed inside buildings (whether rotter or survivor) are now ejected into the streets before they rise.
- A cooldown of 4 hours has been added to the Rotter Skill: Death’s Grasp.
- Added a warning message when nearing the "Reinforced" barricade level, informing players that it prevents entry unless they have a crowbar.
- Removed daily building decay for now.

### Bug Fixes
- Instant Coffee now correctly rewards stamina.
- All stamina items now grant an additional 1 stamina point to offset the 1 stamina cost for using them.
- Fixed an issue where the Rotter Skill: Shriek was not appearing as a command.
- Fixed an issue where searching sometimes resulted in a 0 value roll.
- Fixed an issue where the Desecrate command wasn't showing when a building reached ruined but still had a buffer.

## Beta Update 4 - Patch 3
*January 14, 2025*

### Improvements
- Armor values have been reduced for balance. Maximum AP is now 15 with full armor, and most players will have 5-10 AP unless equipped with Best-in-Slot gear. This change ensures combat is more balanced, as high AP (20+) was too strong given it replenishes after each fight.
- I'm going to be revisiting the loot tables next and adding a few more armor pieces to the loot table.
- I'm still trying to find the right balance for action stamina costs. I've reduced the stamina cost for the following actions:
    - Barricading/Removing Barricades: 2 Stamina
    - Desecration/Repair: 2 Stamina
    - Encounter Combat: 5 Stamina

## Beta Update 4 - Patch 2
*January 13, 2025*

### Improvements

- Weapon Damage Adjustment: Adjusted the damage values for all weapon-related actions.
    - I want to clarify a misconception about the damage value shown in the inventory screen. The damage shown represents the base damage for the final blow, ranging from `base_damage` to `base_damage * 2`. For example, a weapon with `8 base damage` will deal final blows between `8-16 damage`. I'll be making an update soon to make that more clear.
    - Regular combat damage depends on the actions used and your weapon skill level. For more details, check the "Action Info" button during combat. Today's changes only affect the weapon action values.

### NPC Balance Changes

- Increased hit points and armor for all rotters and survivors.
- Low-level rotters received an attack buff.
- High-level rotters received an attack nerf.
- Current rotter population is capped so new rotters will appear as existing ones are defeated.


## Beta Update 4 - Patch 1
*January 12, 2025*

### Improvements
- Players will be rewarded with a small amount of anima for succeeding at rotter actions like desecration and barricade attacks.
- Added a new animus well power called Forgotten Touch that will temporarily allow player rotters to open doors.

### Bug Fixes
- Adding a DNA sample to the lab analyzer will remove it from your inventory.

## Beta Update 4
*January 11, 2025*

### New Features
The dark rifts pulse with power within the Downtown District. 
- Animus Wells will now have a list of powers that can be purchased by Rotters using Anima.
- Here’s a short list of the powers
    - Plague Guidance: Allows Rotters to easily locate Miasma in the district
    - Corpse Walk: Grants the Rotter free movement for 12 hours.
    - Renewed Flesh: Heals the Rotter for 25 hit points.
    - Blight Surge: Increase chance of desecration by 10% for 12 hours.
    - Necrotic Fury: Increase chance of destroying barricades by 10% for 12 hours.
    - Corrupting Rage: Increase attack damage by 150% for 12 hours.
    - Bonewarden: Increase Rotter Armor by 10 for 12 hours.
- Animus Wells will now tell you how many ruined buildings are in the district and the percentage of ruined buildings vs non-ruined buildings in the district.
- Some Animus Well powers will only be visible when a certain percentage of ruined buildings are present in the district.

### Improvements
- It now cost 25 stamina to stand up after being knocked down (killed).
- The donate button will now properly show its SP cost.
- Added back buttons to the Complete Task and Quit Task screens (seriously, this time).
- Updated the Riot Jacket item to 8 AP
- You can no longer wear your sweatpants on your chest.

### Bug Fixes
- Completing a task will now properly reward you XP.
- Made it clear that you cannot turn in a task while your hands are full.
- Fixed an issue where it was possible to receive an error while turning in a task but still receive its item rewards.
- Fixed an issue where the Athlete Player Background would grant skill levels to Running beyond the maximum level.
- Fixed an issue where NPC Rotters looking for players would be able to enter barricaded buildings.
- Fixed an issue where sometimes using the desecration action would cost double the SP.


## Beta Update 2
*January 8, 2025*

### New Features

A group of survivors have come in from the wastelands and have been seen around the Downtown suburb!

### Survivor NPCs
As part of the ongoing effort to improve the Player Rotter experience, the first iteration of NPC survivors has been pushed to the game world.
- NPC survivors will move about the suburb with various goals in mind including but not limited to hiding in buildings, guarding barricaded buildings, and restocking building supplies.

### Anima and Animus Wells
- When a Player Rotter kills a survivor (NPC or player), they will be rewarded with anima, or life force, that can be used to gain benefits or trigger events at Animus Wells. These benefits will be introduced at a later date, but you can start collecting anima now.
- Animus wells are found in ruined building and can only be seen by the undead.
- Player Rotters can hold the anima for themselves or deposit it into the well for other Player Rotters to use.
- Be careful hoarding all the anima for yourself because if you are knocked down by a survivor, not only do you lose a mutation but you also lose all your anima.

### Improvements
- Survivor skill training now checks your inventory for the required item before pulling it from the stockpile.
- Barricades can now exceed their max level slightly for extra protection.
- Desecration can now ruin buildings slightly beyond the maximum level.
- Added detailed flavor text to barricade and repair options, so building status is clear without using the look command.
- Task embeds now include a back button.
- Direction buttons now have arrow emojis for easier navigation.
- Armor durability loss is now random; armor may not degrade after an encounter. Weapons are unaffected.

### Bug Fixes
- Possibly fixed a bug that was sometimes preventing people from using consumable items.
- You will now actually die if your health drops to zero because of counter-attack damage.
- Fixed a bug where the stamina cost was displaying incorrectly if you were starving.
- Fixed a bug where inactive miasma was still appearing in the city.
- Fixed a bug where rotter players were not able to view their mutations.
- Fixed a bug where search rolls that should have found an item returned as a failed search
- Fixed a bug that was preventing you from removing a barricade piece in between levels None and Feeble.
- Fixed a bug that was preventing you from repairing a building between None and Disordered.
- Fixed a bug where the stamina cost for attacking didn’t display correctly in the drop-down menu.



## Beta Update 1
*January 3, 2025*

### New Features

- Profile Update: Now displays final blow damage variance and equipment armor for more detailed combat and gear insights.
- Footlocker and Packages: Added personal footlockers for secure in-game storage. Packages can be delivered to footlockers, do not affect inventory slots or weight, and must be opened to access their contents. You can find your footlocker in the `/profile` menu.
- Concede Mechanic: Survivors now have the option to concede and transition into a zombie player role through a location-based ability. There is only one buiding in downtown that will allow you to do this.

### Improvements
- Zombie Goal AI Update: Zombies now spread more evenly across the city, minimizing clustering and enhancing strategic gameplay.
- New Tasks: Added several new tasks that will reward you with stockpile items for training.

### Bug Fixes
- Fixed an issue where inspecting survivor players while holding healing items would cause the bot to fail.
- Fixed an issue where sometimes the building name text font didn't show when running the directions command.