import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express"; 

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Apartment API Documentation",
      version: "1.0.0",
      description: "API documentation for Apartment Management System",
    },
    servers: [
      {
        url: "http://localhost:5000/api",
        description: "Development server",
      },
    ],
    components: {
      schemas: {
        ApartmentDetailsResponse: {
          type: "object",
          properties: {
            responseCode: {
              type: "integer",
              description: "HTTP Response Code",
            },
            apartmentDetails: {
              type: "object",
              properties: {
                id: { type: "string", description: "Apartment ID" },
                title: { type: "string", description: "Apartment Title" },
                bedrooms: { type: "integer" },
                bathrooms: { type: "integer" },
                price: { type: "string" },
                currency: { type: "string" },
                compound: { type: "string" },
                size: { type: "string" },
                propertyType: { type: "string" },
                saleType: { type: "string" },
                description: { type: "string" },
                finishingType: { type: "string" },
                unitNumber: { type: "integer" },
                developerId: { type: "string" },
                address: { type: "string" },
                sellerContact: { type: "string" },
                location: { type: "string" },
                project: { type: "string" },
                images: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      url: { type: "string" },
                      altText: { type: "string" },
                      isCover: { type: "boolean" },
                    },
                  },
                },
              },
            },
          },
        },
        ApartmentListingResponse: {
          type: "object",
          properties: {
            responseCode: {
              type: "integer",
              description: "HTTP Response Code",
            },
            apartments: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: { type: "string", description: "Apartment ID" },
                  title: { type: "string", description: "Apartment Title" },
                  bedrooms: { type: "integer" },
                  bathrooms: { type: "integer" },
                  price: { type: "string" },
                  currency: { type: "string" },
                  compound: { type: "string" },
                  size: { type: "string" },
                  propertyType: { type: "string" },
                  saleType: { type: "string" },
                  description: { type: "string" },
                  finishingType: { type: "string" },
                  unitNumber: { type: "integer" },
                  developerId: { type: "string" },
                  project: { type: "string" },
                  address: { type: "string" },
                  images: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        url: { type: "string" },
                        altText: { type: "string" },
                        isCover: { type: "boolean" },
                      },
                    },
                  },
                },
              },
            },
            paginationInfo: {
              type: "object",
              properties: {
                limit: { type: "integer" },
                offset: { type: "integer" },
                total: { type: "integer" },
              },
            },
          },
        },
        BasePaginationResponse: {
          type: "object",
          properties: {
            responseCode: {
              type: "integer",
              description: "HTTP Response Code",
            },
            paginationInfo: {
              type: "object",
              properties: {
                limit: { type: "integer" },
                offset: { type: "integer" },
                total: { type: "integer" },
              },
            },
          },
        },
        BaseResponse: {
          type: "object",
          properties: {
            responseCode: {
              type: "integer",
              description: "HTTP Response Code",
            },
          },
        },
        PaginationInfo: {
          type: "object",
          properties: {
            limit: { type: "integer" },
            offset: { type: "integer" },
            total: { type: "integer" },
          },
        },
        DevelopersResponse: {
          type: "object",
          properties: {
            responseCode: {
              type: "integer",
              description: "HTTP Response Code",
            },
            developers: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: { type: "string" },
                  name: { type: "string" },
                },
              },
            },
            paginationInfo: {
              type: "object",
              properties: {
                limit: { type: "integer" },
                offset: { type: "integer" },
                total: { type: "integer" },
              },
            },
          },
        },
        CreateApartmentRequest: {
          type: "object",
          properties: {
            title: { type: "string", description: "Title of the apartment" },
            bedrooms: { type: "integer", description: "Number of bedrooms" },
            bathrooms: { type: "integer", description: "Number of bathrooms" },
            price: { type: "string", description: "Price of the apartment" },
            currency: { type: "string", description: "Currency of the price" },
            compound: {
              type: "string",
              description: "Apartment compound name",
            },
            size: { type: "string", description: "Size of the apartment" },
            propertyType: {
              type: "string",
              enum: ["apartment", "villa", "studio"],
              description: "Type of the property",
            },
            saleType: {
              type: "string",
              enum: ["sale", "rent"],
              description: "Sale type of the property",
            },
            description: {
              type: "string",
              description: "Description of the apartment",
            },
            finishingType: {
              type: "string",
              enum: ["finished", "semi-finished", "core-shell"],
              description: "Finishing type of the apartment",
            },
            unitNumber: { type: "integer", description: "Unit number" },
            developerId: { type: "string", description: "Developer ID" },
            refNumber: {
              type: "string",
              description: "Unique reference number of the apartment",
            },
            images: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  url: { type: "string", description: "Image URL" },
                  altText: { type: "string", description: "Image alt text" },
                  isCover: {
                    type: "boolean",
                    description: "Is this image the cover?",
                  },
                },
              },
              minItems: 1,
              description: "List of images for the apartment",
            },
          },
          required: [
            "title",
            "bedrooms",
            "bathrooms",
            "price",
            "currency",
            "size",
            "propertyType",
            "saleType",
            "description",
            "finishingType",
            "refNumber",
            "images",
          ],
        },
      },
    },
  },
  apis: ["./src/api/router/*.ts"], 
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
