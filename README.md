**Portfolio Analytics & A/B Testing System**
Overview

This project is a custom-built analytics and A/B testing system integrated into my personal portfolio website.
It tracks real user interactions, measures engagement, and evaluates UI variations using event-driven analytics without relying on third-party tools like Google Analytics.

The system is designed to demonstrate product thinking, experimentation, and data-driven decision-making.
What We Built

**1. Custom Analytics Engine**
Event ingestion API (/api/events)
MongoDB-based event storage
Session-based tracking
Privacy-friendly IP masking
Real-time analytics dashboard
Tracked events include:
Section views
Navigation clicks
Project card interactions
Modal opens/closes
External link clicks
Experiment views and clicks

2. A/B Testing Framework (Frontend + Backend)

We implemented true A/B testing, not just UI toggles.

Experiment Variables
Project Card CTA Experiment
Experiment Name: project_card_cta_v1
Variant A: "View Details"
Variant B: "Explore Project"

Variant is sticky per user (stored in localStorage)
3. Analytics Lab Dashboard

A dedicated /analytics page displays:

Total events

Unique sessions

Event breakdown

Project engagement

CTA performance

A/B experiment results with:

Views

Clicks

CTR

Auto-highlighted winner

All metrics are computed on the backend, ensuring data integrity.

Problem This Solves

Traditional portfolios show what was built, but not:

How users interact with it

Which UI decisions perform better

Whether design changes improve engagement

This system solves that by:

Turning the portfolio into a measurable product

Allowing UI decisions to be backed by data

Demonstrating real-world experimentation skills

Key Takeaway

This project transforms a static portfolio into a data-driven, experiment-backed product, showcasing how engineering decisions can directly influence user behavior and outcomes.

Each user sees only one variant

Exposure and conversion are tracked separately
