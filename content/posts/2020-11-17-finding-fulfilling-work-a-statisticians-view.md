---
template: post
title: '(Draft #1) Finding Fulfilling Work - A Statistician''s View'
slug: draft-1-finding-fulfilling-work
draft: true
date: 2020-11-17T13:41:12.138Z
description: >-
  Finding fulfilling work as a partially observable Markov decision-making
  process (POMDP).
category: Work
---
Approaching my mid-twenties, it dawned on me how undirected most people - they flutter from job-to-job, blown by the twin winds of circumstance and specialisation. I noticed this in my own thinking - how incidental my occupational decisions are.

Having experienced academia, startups, corporates and freelancing...

During my years of building machine learning models, I picked up a trick or two. The one I will use today involves

A trick I picked up during my years building machine learning models is to create a simple model and collide it with the real-world

## An Agent-Based Model of Work-Induced Fulfilment

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
