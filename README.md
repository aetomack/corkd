# Goal
Get artists and creatives more reliable access to art partrons.

# Intuition
- Warm and reliable leads between sales can be few and far between. In more business terms, TAM is large, but SAM and SOM shrink considerably for artists. 
- Art, especially physical art, is very important to me. 
- In a digital age (and an AI age), it's increasingly difficult for artists to distribute their art. Maybe a long time ago social media was a boon, but saturation makes connecting with audiences difficult, and being an influencer is now part of the job a lot of artists were never interested in. 
**Creatives need warm, direct leads to patrons with whom they can connect**

# Problem (as described by an artist friend of mine)
- How are openings advertised?
  - A few main-stream platforms
    1. Backstage
    2. Actors Access (primary?)
    3. Playbill (people like this)
      - Usually apply via email, airtable/google form
  - Facebook groups.
  - Word of mouth
- How do people do outreach?
  - Apply via above
  - Agents do it for you
- How do you typically apply?
  - On-site casting calls/sending in tapes
- Issues with existing?
  - Outdated, janky. 
  - Actors Access (primary playform) you have to pay for submissions, also pay subscription ($10/month)
- Distinction between equity/non-equity:
  - Equity actors are unionized-- lots of protections regarding applications, how to host auditions.
  - Nonequity is a FFA-- can audition for anything, but gamble regarding pay, negotiations, protections.
    - *Provide stability to nonequity actors?*

# Approach
- Arists hate AI. But we can empower them to succeed by improving their outreach and client sourcing.
- SixtyFour --> I'm a {type of artist} with {some specialization/grainularity} looking for {goal} in {location} within {radius}. Returns people who they should be connecting with, potentially how to reach them.
- Gives direct line to leads w/o removing human component-- they still have to go talk to them in-person.
- Photo component? Take a picture of their work and match it to someone who would buy it?

# Stack
- Generally referring to [Rykuno/TofuStack](https://github.com/Rykuno/TofuStack) for a lightweight stack.
- SixtyFour Deep Search queries can be costly and time consuming. We want to minimize the amount of time it takes to get solid leads.
    - Investigate if we can cache responses to progressively reduce latency. 
    - Can do Redis for fast in-memory storage
- Sveltekit because I want to play with it
- Lucia for open source auth. Clerk in the past has been fine but pretty bulky for this case.

## Database, ORM providers
- [Drizzle](https://www.github.com/drizzle-team/drizzle-orm) is super lightweight, headless ORM
- Ongoing open-source support
- Drizzle can work with basically any database. I'm familiar with Supabase (kinda), so we could stick with them.

