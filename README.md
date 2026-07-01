# Goal
Get artists and creatives more reliable access to art partrons.

# Intuition
- Warm and reliable leads between sales can be few and far between. In more business terms, TAM is large, but SAM and SOM shrink considerably for artits. 
- Art, especially physical art, is very important to me. 
- In a digital age (and an AI age), it's increasingly difficult for artists to distribute their art. Maybe a long time ago social media was a boon, but saturation makes connecting with audiences difficult, and being an influencer is now part of the job a lot of artists were never interested in. 
**Creatives need warm, direct leads to patrons who they can connect with**

# Approach
- Arists hate AI. But here's an use-case of it that doesn't replace their jobs because that's ridiculous and it should automate aspects of our lives that can't, do to resource constraint, resolve independently.
- SixtyFour --> I'm a {type of artist} with {some specialization/grainularity} looking for {goal} in {location} within {radius}. Returns people who they should be connecting with, potentially how to reach them.
- Gives direct line to leads w/o removing human component-- they still have to go talk to them in-person.

# Architecture
- SixtyFour Deep Search queries can be costly and time consuming. We want to minimize the amount of time it takes to get solid leads.
    - Investigate if we can cache responses to progressively reduce latency. 
    - Can do Redis for fast in-memory storage
- Svelte > React
