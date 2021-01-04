#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { InfraBuilderStack } from '../lib/infra-builder-stack';

const app = new cdk.App();
new InfraBuilderStack(app, 'InfraBuilderStack');
