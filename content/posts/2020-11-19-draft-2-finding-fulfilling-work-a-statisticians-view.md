---
template: post
title: '(Draft #2) Finding Fulfilling Work - A Statistician''s View'
slug: draft-2-finding-fulfilling-work
draft: true
date: 2020-11-19T08:56:55.214Z
description: >-
  Finding fulfilling work as a partially observable Markov decision-making
  process (POMDP).
category: Fulfilment
---
Approaching my mid-twenties, it dawned on me how undirected most people - they flutter from job-to-job, blown by the twin winds of circumstance and specialisation. I noticed this in my own thinking - how incidental my occupational decisions are.

Having experienced academia, startups, corporates and freelancing...

During my years of building machine learning models, I picked up a trick or two. The one I will use today involves

A trick I picked up during my years building machine learning models is to create a simple model and collide it with the real-world.

I have this problem - I lack a good mental model to make life decisions.

## A Brutal Truth

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

Begin with a stupidly simple model (SSM) that you would be embarrassed to show your friends. This model must capture core behaviour - imagine yourself squinting at the world and incorporating only the most prominent objects and dynamics.

Then we take the SSM and collide it with the chaotic, real world and ask "what critical assumptions are violated by real world dynamics and would cause this model to make bad or irrational decisions?". Now we want to fold in this behaviour into our model - increasing predictive power at the cost of greater complexity.

As we build out the model, it is important to validate your modelling decisions. We might go though several iterations of a model on paper but once we have something "good enough", we should evaluate it using real-world data. Benchmarking focuses the modeller on quantifying the gap between the model's performance and the necessary level of performance required to be "good enough". If the gap can be closed then the solution is technically feasible but for many problems this is simply not possible.

(discarding your original model)

**An example: Light as a wave versus light as a particle** 

**Dynamic pricing as a queue**

## So What...

The subtle power of this approach is in its generality: you can apply it to any system of interrelations.

You can imagine any outcome as the result of a system, map the system with your evolving SSM and build a decision-making framework to influence that outcome.

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

(example of leveraging intuition in new domains)

## A Simple Model of Experience-Induced Fulfilment

I want to better understand how I can lead a happy, fulfilled life. The decisions I take over which experiences I I am going to suggest a model - that the paths I will take through life can be viewed

**Previous**

I am a statistician. That gives me the right to take the inherent, causal complexity of the world and reduce it to background noise. Watch me wave my wand.

Let's assume we have an agent-based, statistical model. The human is the agent - a sequential decision-maker with:

* A historical sequence of work experiences (decisions) and the level of fulfilment they induced (rewards).
* A future sequence of work experiences (decisions) with unknown levels of fulfilment (rewards). 
* An internal value function that learns to anticipate the level of fulfilment (rewards) associated with future work experiences (decisions).
* A decision-making process that sequentially chooses work experiences to maximise the total estimated fulfilment, given by the internal value function.

We can visualise this agent as moving along the nodes of an enormous probability tree where each fork in the tree is a decision to pursue one work experience or another.

![](/media/deep-roots-1024x576-1024x585.jpg)

So how does our agent make optimal decisions about its future? 

Firstly, it knows the space of all possible work experiences - the whole tree. Secondly, it is really good at estimating the true reward associated with different work experiences using its internal value function. With these two sets of information, the agent can project forward and pick the branch with the highest total fulfilment.

## Model ≠ Reality

So let's throw what we know about the real world at our model and see what happens.

**1. The objective is ill-defined**

Fulfilment is a fuzzy, multi-variate, highly personalised function. Many things go into determining our level of fulfilment - the amount of money we earn, the legacy of our upbringing, the perceived status of the job, our ability to make a difference, our ability to travel, our desire to learn new things versus exercise talent etc.

Ill-defined objectives are difficult to optimise. To make this tractable we need to constrain our definition of fulfilment to a low-dimensional and manageable measure.

**2. The historical data is biased and incomplete**

Our work history is the product of a chaotic process. Small changes to the initial conditions, a different school or friends group perhaps, would have led to us spiralling on some radically different journey. Couple this sensitivity to initial conditions with the [chain reaction of behaviour and subsequent self-justification](https://www.capitalideasonline.com/wordpress/the-pyramid-of-choice/) - now our historical data has sample bias.

To learn from biased data we need to identify it and correct for it.

**3. Our internal value function has to adapt and change over time**

Our journey into the working world often starts with achieving some level of financial independence that comes with mastery of revenue-generating skills. However a [well-documented phenomenon](https://www.nature.com/articles/s41562-017-0277-0) is that after humans achieve a threshold of income and financial security they tend to see diminishing returns in happiness (read: fulfilment) from additional income and prefer to trade it for leisure and other pursuits.

The task for our agent has suddenly become more complicated - the external reward of fulfilment is itself a non-deterministic, stochastic function.

However all is not lost. If our agent can think probabilistically, introspect and update its self-knowledge then it can hope to make good-enough decisions in the face of an uncertain and shifting reward.

**5. Our knowledge of the tree is conditionally dependent on our history**

I know next to nothing about quantum gravity. This is because my knowledge of all possible future work experiences is conditionally dependent on my previous experiences. Similarly our agent, acting in the real-world, cannot have complete knowledge of the set of all possible choices at each moment in time.

**6. The tree is constantly growing and changing**

New jobs, fields and work experiences are created all the time. 

**4. Industrial Education & Labor pressures encourage depth-first search**

Specialisation

## Keep Calm & Cut Roots

Whats missing?

\- Multi-agent environment 

Our decision-making process is skewed by 

The task of finding fulfilling work is a decision-making system - it has inputs, a function/models and outputs.

Bad decision-making 

Good decision-making

My heuristics for choosing fulfilling work:

1. Am I building something that people want?
2. Am I collaborating with people I admire?
3. Am I working on problems with meaning consequences?

Notes:

* Over the course of a 40 year full-time career, around 10,000 days will be devoted to "work". That's 70% of every year.
* sequential decision making process with partially observable state (POMDP)

**Legacy:**

by an internal value function which is heavily weighted towards skill and monetary acquisition and less weighted towards travel, making a difference etc. This necessitates a change in the composition of our value function.

What does it change to? Hard to say - preferences are individual and dependent on our historical trajectory. Each agent needs to introspect and update its weighting

**Finding Fulfilling Work as POMDP** 

Most people would agree that the task of finding fulfilling work is a hard one.

We can frame the problem in terms of statistical modelling - data, model, code.

We use historical data as the basis for our predictions

We can formulate the task of finding fulfilling work as a sequential decision making process.

Imagine a human as an agent. An agent has a value function - a fancy term for a probabilistic estimation of the utility that comes with each choice ("work" in this example). It is probabilistic because 

Each agent starts on their journey without being able to observe the 

has a history of encounters with different types of "work". The decisions to informed by their upbringing, schooling

We use historical data to estimate the expected fulfilment of different work alternatives.

Surfing example:

Let's use surfing as an example. Most beginner surfers tend to make a common mistake - they position themselves at a part of the wave's face which does not have enough power. No wave power means no speed means no chance of standing up. Left to their own devices, novice surfers take some time to build up the intuition to take the wave near the "peak" - where the wave first starts to break and where the most force production occurs.

Let's create a simple model of a surfer catching a wave. Firstly, we have a human with a board. A wave approaches. We freeze the wave in time at the point when it first starts to break. We note that the wave is steepest at the peak and then decreases in slope the further away from the peak we go........

Reasoning up as probing tool

**Why do competitors exist**

The use of models as a probing tool is the subject of this article.

There are many ways that we acquire knowledge about the world: randomised controlled experiments, hearsay, media, news, 

Much of our experiencial knowledge 

is it easier to ask why won't this work vs create something
