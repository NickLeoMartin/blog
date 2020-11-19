---
template: post
title: Statistical Modelling & Gall's Law
slug: statistical-modelling-and-galls-law
draft: true
date: 2020-11-19T13:21:19.354Z
description: .
category: Work
---
Statistical modellers are often faced with the challenge of creating systems that interacts with a complex world. This could be generating recommendations to influence user buying behaviour, predicting future fluctuations to better time the purchase of stocks or route planning for autonomous vehicles in high traffic.

There is no hope that your statistical model will perfectly predict and flawlessly act in a complex world.

So what can we do in response to this brutal truth?

The pragmatic view is to create something that is "good enough". A system that can make informed decisions and act in a way that generates more upside and less cost than the next best alternative.

## The Trick: Build A Stupidly Simple Model

During my years of building and shipping statistical models that collided with the real world, I internalised a systems thinking approach which is best summed up by "Gall's Law":

> A complex system that works is invariably found to have evolved from a simple system that worked. 
>
> A complex system designed from scratch never works and cannot be patched up to make it work. 
>
> You have to start over with a working simple system.

Begin with a stupidly simple model (SSM) that you would be embarrassed to show your friends. This model must capture core behaviour - imagine yourself squinting at the world and incorporating only the most prominent actors and dynamics.

Then we take the SSM and collide it with the chaotic, real world and ask "what critical assumptions are violated by real world dynamics and would cause this model to make bad or irrational decisions?". Now we want to fold in this behaviour into our model - increasing predictive power at the cost of greater complexity.

As we build out the model, it is important to validate your modelling decisions. We might go though several iterations of a model on paper but once we have something "good enough", we should evaluate it using real-world data. Benchmarking focuses the modeller on quantifying the gap between the model's performance and the necessary level of performance required to be "good enough".

(discarding your original model)

## **An Exercise in Stupidity: Dynamic Pricing for Ride-Hailing**

One benefit of digitising ride-hailing is the transparency that comes with providing accurate upfront price estimations to riders and drivers. Indeed, the price of the trip is very influential on both the rider's demand and the driver's desire to supply.

A comparatively high price would reduce riders demand but increase the drivers willingness to supply. A comparatively low price would increase riders demand but decrease the willingness of drivers to supply.

So how can we model this system of pricing?

Let's assume there is only one route from "A" to "B". There are many riders that request trips at a consistent rate and many drivers that are either offline, waiting or in-transit with a rider. At $10 a ride, the consistent demand for trips is adequately supplied by just enough drivers, with a 3 minute waiting time. Drivers want to maximise the amount they earn for their time and will therefore become more active if prices increase. Riders will also accept higher prices to avoid high waiting times. This is our SSM.

Now we collide our model with the world.

_World: "what happens if there is a big concert playing tonight downtown at "B" and rider demand spikes?"_

This violates our model's assumption that riders request at a consistent rate. Now we have many riders and not enough available drivers. We can quantify rider dissatisfaction using waiting times - the time between when they request a ride to when they are picked up by the driver.

In this example, rider waiting times are soaring to 30 minutes a trip because of the time it takes for the fixed number of drivers to take a rider from "A" to "B" and drive back to fetch another available rider.

This is bad. Our model appears to be brittle. We need to expand it to deal with these dynamics.

If we step back and squint, we can view this problem as a queue with riders lining up and being served at a certain rate by the pool of drivers. This is great luck because queues are well-studied in the field of statistics!

Running off to our library, we dust off our a tome on [Queuing Theory](https://en.wikipedia.org/wiki/Queueing_theory) and recognise that this is an M/M/c-type queue (c=1 is our model). Now we can apply some maths and infer how many drivers we need to get the queue waiting times down to something reasonable (say 5 minutes).

To get enough drivers active to meet demand, we will temporarily raise the price of trips from "A" to "B" to $15 and notify drivers of the 1.5x increase. According to our model, they will seek to maximise the amount they earn for their time and are incentivised to work now for $15 rather than $10 later. They start driving and waiting times will diminish.

_World: "mmm but what if we had set the price at $12 or $20?"_

The former might have not reduced waiting times enough and the later may have killed rider demand in favour of other transport options. Perhaps if our system experiences regular demand shocks, we can learn how much we need to multiple the trip's price to engage more drivers and keep waiting times at an acceptable level. This is well-studied concept in economics, [price elasticity](https://en.wikipedia.org/wiki/Elasticity_(economics)), so our odds of doing this well seem strong.

_World: "errr but how will this handle the infinite possible combinations of routes and the thousands of different cities that our platform will be active in?"_

_(pauses to think and bite nails...)_

Well...queues are only concerned with waiting times for riders and the pool of drivers. Geography and route specifics are not critical. We might as well define an arbitrary "zone" and designate all activity in that "zone" to one queue (a city perhaps). We can be fancy with our definition, choosing a low or a high resolution, but ultimately all we are doing is horizontally scaling out the number of queues and price elasticity models to encompass the globe.

This dance can go on and on - we could consider how to price the fare for any arbitrary trip, decide how we match drivers to riders, plan the most efficient route for the driver etc.

The takeaway: our stupidly simple model has evolved to handle adaptive user behaviour in our marketplace. Pretty cool.

## So What...

The subtle power of this approach is in its generality: you can apply it to any system of interrelations.

You can imagine any outcome as the result of a system, map the system with your evolving SSM and build a decision-making framework to influence that outcome.

Some examples of outcomes in a business context:

* The price you pay for an Uber ride
* The recommendations you receive on Amazon
* The value of a stock in 3 months

Some examples of outcomes in your personal life:

* Getting a promotion
* Your dog urinating indoors (again)
* Conceiving a child
* Retiring at 30
* Becoming an advanced surfer

Each of these is the result of system of observable and unobservable causal relationships.

Another useful by-product of evolving an SSM is the generation of unexpected insights.

Through this process of positing a model and probing "why won't it work? why will it work?", we engage our mind in a way that leverages our vast experiential knowledge of the world. This knowledge tends to be encoded in our intuition in specific domains - mostly sitting below consciousness. By bringing it to the level of conscious reasoning we are able to connect disparate domains for greater leverage.

Tool makers

Occam's razor - easier to reason up then reduce down

(example of leveraging intuition in new domains)

Alternatives

##
