# Architecture

**Project:** End of the World Travel

**Version:** 1.0

**Status:** Active Architecture Guide

---

# Purpose

This document defines the long-term architecture of End of the World Travel.

It explains how the website is organized, how new content should be added, and how every section relates to the others.

The objective is to keep the project simple, scalable and easy to maintain.

---

# Project Philosophy

The website should remain:

Static

Fast

Accessible

Semantic

Editorial

Independent

Every new feature should support those principles.

---

# Current Technology

HTML5

CSS3

Vanilla JavaScript

Git

GitHub

Vercel

No unnecessary frameworks.

Future migrations are possible, but simplicity comes first.

---

# Site Structure

Home

↓

Destinations

↓

Experiences

↓

Journal

↓

Partners

↓

Plan Your Trip

↓

About

↓

Sources & Methodology

↓

Photo Credits

---

# Home

Purpose:

Introduce the publication.

Present featured destinations.

Highlight important editorial updates.

Guide readers toward the rest of the website.

The Home page should never become overloaded.

---

# Destinations

One destination per page.

Every destination follows the same structure.

Overview

Geography

History

Nature

Communities

Responsible Travel

Nearby Places

Sources

Related Guides

---

# Experiences

Educational content.

Organized by themes instead of destinations.

Examples:

Culture

Museums

Navigation

Cuisine

National Parks

Wildlife

Photography

Responsible Travel

---

# Journal

Editorial news.

Purpose:

Explain regional developments.

Infrastructure

Research

Science

Protected Areas

Communities

Transportation

Conservation

Journal articles should remain factual and concise.

---

# Partners

Future collaborations.

Examples:

Museums

Universities

Responsible tourism operators

Photographers

Conservation organizations

Sponsored content must always be clearly identified.

---

# Plan Your Trip

Educational information only.

Possible sections:

Weather

Transportation

Maps

Safety

National Parks

Official visitor information

Responsible travel

No booking engine.

---

# Sources

Every article should link to:

Primary references

Official institutions

Scientific sources

Photo credits

Editorial transparency is essential.

---

# Navigation Principles

Navigation should remain shallow.

Users should reach any page within three clicks whenever possible.

Avoid unnecessary nesting.

---

# Internal Linking

Every destination should connect to:

Nearby destinations

Experiences

Journal articles

Protected areas

Related routes

Museums

Sources

This creates a semantic knowledge network.

---

# Components

Reusable components include:

Header

Footer

Hero

Destination Card

Article Card

Experience Card

Editorial Note

Image Gallery

Sidebar

Information Banner

Callout Box

Source List

Components should remain visually consistent.

---

# Naming Conventions

Use descriptive file names.

Examples:

puerto-williams.html

cape-horn.html

beagle-channel.html

Avoid abbreviations.

Avoid spaces.

Use lowercase.

---

# Images

Store images inside:

/images

Use descriptive filenames.

Example:

cape-horn-lighthouse.jpg

Avoid generic names.

---

# Documentation

Project documentation belongs inside:

/docs

Examples:

design-system.md

editorial-style-guide.md

sources-policy.md

photography.md

content-roadmap.md

seo-guidelines.md

architecture.md

These documents define the project standards.

---

# Future Growth

Future additions may include:

Interactive maps

Editorial timelines

Search

Filters

Entity relationships

Multilingual support

News archive

Knowledge graph

These features should only be added when they improve the publication.

---

# Performance

Target:

Fast loading

Minimal JavaScript

Optimized images

Semantic HTML

Accessibility

Static rendering whenever possible.

---

# Scalability

The architecture should support:

Hundreds of destination pages

Editorial articles

Photo archives

Scientific references

Interactive maps

Future APIs

without requiring a complete redesign.

---

# AI Collaboration

Every AI contributing to this repository should:

Read the documentation first.

Respect existing architecture.

Avoid unnecessary dependencies.

Reuse components whenever possible.

Preserve editorial consistency.

Never restructure the project without approval.

---

# Long-Term Vision

The website should evolve into a documentary knowledge platform about Southern Chile.

Every architectural decision should support:

Editorial quality

Maintainability

Performance

Accessibility

Scalability

Trust

The architecture should remain simple enough for long-term maintenance while supporting future growth.

